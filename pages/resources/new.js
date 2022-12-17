import Layout from "components/Layout";
import { useState } from "react";


const DEFAULT_DATA = {
       "title": "",
       "description": "",
       "link": "",
       "priority": "1",
       "timeToFinish": 0,
}


const ResourceCreate = () => {

    const [form, setForm] = useState(DEFAULT_DATA);
    const submitForm = () => {
        alert(JSON.stringify(form));
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    };

    const resetForm = () => setForm(DEFAULT_DATA);


    return(
        <Layout>
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <div className="resource-form">
                            <h1 className="title">Add New Resource</h1>
                                {/* form */}
                            <div className="field">
                                <label className="label">Title</label>
                                <div className="control">
                                    <input
                                    name="title" 
                                    value={form.title}
                                    onChange={handleChange}
                                    className="input" 
                                    type="text" 
                                    placeholder="Hire Taja"/>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Description</label>
                                <div className="control">
                                    <textarea 
                                    name="description"
                                    onChange={handleChange}
                                    value={form.description}
                                    className="textarea"  
                                    type="text" 
                                    placeholder="Taja is one of the best developers to work with!"/>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Link</label>
                                <div className="control">
                                    <input 
                                    name="link"
                                    onChange={handleChange}
                                    value={form.link}
                                    className="input" 
                                    type="text" 
                                    placeholder="https://www.taja-house.com"/>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Priority</label>
                                <div class="control">
                                    <div class="select">
                                    <select
                                    name="priority" 
                                    onChange={handleChange}
                                    value={form.priority} >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                    </div>
                                </div>
                                </div>
                            <div className="field">
                                <label className="label">Time to Finish</label>
                                <div className="control">
                                    <input 
                                    onChange={handleChange}
                                    name="timeToFinish"
                                    value={form.timeToFinish}
                                    className="input" 
                                    type="number" 
                                    placeholder="60"/>
                                </div>
                                <p className="help">Time: Minutes</p>
                            </div>
                            <div className="field is-grouped">
                            <div className="control">
                                <button 
                                type="submit"
                                onClick={submitForm}
                                className="button is-link">
                                    Submit
                                </button>
                            </div>
                            <div className="control">
                                <button 
                                onClick={resetForm}
                                className="button is-link is-light">
                                    Cancel
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ResourceCreate;