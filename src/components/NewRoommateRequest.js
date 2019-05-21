import React, { Component } from 'react'
import {
    Redirect
} from 'react-router-dom'

class NewRoommateRequest extends Component {
    constructor(){
        super();
        this.state={
            request: {
                area:'',
                city:'',
                gender:'',
                rent:0,
                roommates:1
            },
            requestSubmitted:false
        }
    }

    onChange=(e)=>{
        var fieldName=e.target.name;
        var fieldValue=e.target.value;

        var request=Object.assign({},this.state.request)
        request[fieldName]=fieldValue;

        this.setState({
            request
        })
    }

    onSubmit=(e)=>{
        console.log(this.state.request)
        e.preventDefault();

        var formBody=[];
        for(let key in this.state.request){
            formBody.push(key + "=" + encodeURIComponent(this.state.request[key]))
        }

        formBody=formBody.join("&")
        console.log(formBody);

        fetch('/api/roommaterequests',{
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem("token")
            },
            body:formBody
        })
        .then((response)=>response.json())
        .then((response)=>{
            console.log(JSON.stringify(response));
            this.setState({
                requestSubmitted:true
            })
        })
        .catch((err)=>{
            alert('Failed to add new requesu')
        })
    }

    render() {
        if(this.state.requestSubmitted){
            return (
                <Redirect to="/"/>
            )
        }

        return (
            <section className="contacts-2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <h3>New Roommate Request</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <form>
                                <label className="h6">Location</label>
                                <input name="area" type="text" value={this.state.request.area} className="form-control" onChange={this.onChange} />
                                <label className="h6">City</label>
                                <input name="city" type="text" value={this.state.request.city} className="form-control" onChange={this.onChange} />
                                <label className="h6">Gender</label>
                                <select name="gender" onChange={this.onChange}>
                                    <option value="m" selected>Male</option>
                                    <option value="f">Female</option>
                                </select>
                                <br/>
                                <label className="h6">Rent</label>
                                <input name="rent" type="text" value={this.state.request.rent} className="form-control" onChange={this.onChange} />
                                <label className="h6"># of roommates</label>
                                <input name="roommates" type="text" value={this.state.request.roommates} className="form-control" onChange={this.onChange} />
                                <button onClick={this.onSubmit} className="btn btn-primary">Submit New Request</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default NewRoommateRequest;