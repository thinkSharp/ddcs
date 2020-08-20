import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
export class RegisterDataset extends Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
    render() {
        return (

    <div>
      <form>
            <div className="page-header">
              <h3 className="page-title"> Register New Dataset </h3>
            </div>
            <div className="row">
            
            <div className="col-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Data Producer Info</h4>

                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Producer Name</label>
                            <div className="col-sm-9">
                            <Form.Control  type="text" />
                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Application Name</label>
                            <div className="col-sm-9">
                            <Form.Control type="text" />
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Department or Person</label>
                            <div className="col-sm-9">
                              <Form.Control type="text" />
                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Email </label>
                            <div className="col-sm-9">
                              <Form.Control type="text" />
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                                      
                    </div>
                </div>
              </div>
                <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                  <h4 className="card-title">Dataset Info</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Dataset Name</label>
                            <div className="col-sm-9">
                            <Form.Control type="text"/>
                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Dataset Type</label>
                            
                            <div className="col-sm-9">
                            <select className="form-control">
                                <option>Database</option>
                                <option>Network Folder SFTP</option>
                                <option>Network Folder Sharepoint</option>
                                <option>S3 Bucket</option>
                              </select>
                            
                            </div>
                          </Form.Group>
                        </div>
                      </div>
           
                  </div>
                </div>
              </div>
              
              <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                  <h4 className="card-title">SFTP Access Info</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">sftp path</label>
                            <div className="col-sm-9">
                            <Form.Control  type="text" />
                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">sftp credentials</label>
                            <div className="col-sm-9">
                            <Form.Control type="text" />
                            </div>
                          </Form.Group>
                        </div>
                      </div>
        
                  </div>
                </div>
              </div>
              <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                  <h4 className="card-title">Sharepoint Access Info</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Folder Path</label>
                            <div className="col-sm-9">
                            <Form.Control  type="text" />
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                  <h4 className="card-title">S3 Bucket Info</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Bucket Name</label>
                            <div className="col-sm-9">
                            <Form.Control  type="text" />
                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Sub Folder</label>
                            <div className="col-sm-9">
                            <Form.Control type="text" />
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                            

                  </div>
                </div>
              </div>
              <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                  <h4 className="card-title">Test Connections</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">File Name</label>
                            <div className="col-sm-9">
                            <Form.Control  type="text" />
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-6">
                        <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Select File for upload</label>
                        <Form.Control type="file" name="img[]" className="file-upload-default" />
                        <div className="input-group col-sm-9">
                          <Form.Control type="text" className="form-control file-upload-info" disabled placeholder="Upload Image" /> 
                          <span className="input-group-append">
                            <button className="file-upload-browse btn btn-primary" type="button">Upload</button>
                          </span>
                        </div>
                      </Form.Group>
                        </div>
                      </div>
               
                  </div>
                </div>
              </div>
              <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                     <h4 className="card-title">Data Management</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Data Location</label>
                            <div className="col-sm-9">
                            <select className="form-control form-control-lg" id="dataLocation">
                            <option>DDCS</option>
                            <option>External</option>
                            </select>
                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Data Generation Frequency / Cron Job Schedule</label>
                            <div className="col-sm-9">
                            <Form.Control  type="text" />
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary mr-2">Submit</button>
                      <button className="btn btn-light">Cancel</button>
                  </div>
                </div>
              </div>
         
            </div>
            </form>
    </div>
             
        )
    
    }
}

export default RegisterDataset ;
