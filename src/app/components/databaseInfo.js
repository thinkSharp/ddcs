import React, { useState } from 'react';


const databaseInfo = () => {

    const [count, setCount] = useState(0)

    return (
        <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                  <h4 className="card-title">Database Info</h4>
                      <div className="row">
                        <div className="col-md-6">
    
                          <Form.Group className="row">
                          <button onClick={() => setCount(count + 1)}>Count {count}</button>
                            <label className="col-sm-3 col-form-label">Database Type</label>
                            <div className="col-sm-9">
                            <select className="form-control">
                              <option>Oracle</option>
                              <option>Microsoft SQL Server</option>
                              <option>Sybase</option>
                              <option>My SQL</option>
                              <option>Aurora</option>
                            </select>
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Connection String</label>
                            <div className="col-sm-9">
                            <textarea className="form-control" id="connectionString" rows="4"></textarea>
                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Sql Query</label>
                            <div className="col-sm-9">
                            
                            <textarea className="form-control" id="sqlquery" rows="4"></textarea>
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            
                            <div className="col-sm-9">
                            <button type="button" className="btn btn-success btn-rounded">Test Connection</button>
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              
    );
};

databaseInfo.propTypes = {};

export default databaseInfo;