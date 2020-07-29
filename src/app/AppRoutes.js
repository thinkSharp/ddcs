import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));

const FontAwesome = lazy(() => import('./icons/FontAwesome'));


const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./user-pages/Error404'));
const Error500 = lazy(() => import('./user-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));

const BlankPage = lazy(() => import('./user-pages/BlankPage'));

const RegisterDataset = lazy(() => import('./registration/RegisterDataset'));
const DatasetCorrection = lazy(() => import('./registration/DatasetCorrection'));
const DatasetSchemaUpdate = lazy(() => import('./registration/DatasetSchemaUpdate'));
const DatasetCancellation = lazy(() => import('./registration/DatasetCancellation'));
const ManageDatasetPolling = lazy(() => import('./registration/ManageDatasetPolling'));
const SearchRegistry = lazy(() => import('./registration/SearchRegistry'));

const DepositoryAdHoc = lazy(() => import('./depository/AdHoc'));
const CreateSubscription = lazy(() => import('./depository/CreateSubscription'));
const UpdateSubscription = lazy(() => import('./depository/UpdateSubscription'));
const DeleteSubscription = lazy(() => import('./depository/DeleteSubscription'));
const DatasetDataProfile = lazy(() => import('./depository/DatasetDataProfile'));
const DatasetDataQuality = lazy(() => import('./depository/DatasetDataQuality'));

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />

          <Route path="/registration/register-dataset" component={ RegisterDataset } />
          <Route path="/registration/dataset-correction" component={ DatasetCorrection } />
          <Route path="/registration/schema-update" component={ DatasetSchemaUpdate } />
          <Route path="/registration/cancel-dataset" component={ DatasetCancellation } />
          <Route path="/registration/manage-polling-dataset" component={ ManageDatasetPolling } />
          <Route path="/registration/search-registry" component={ SearchRegistry } />

          <Route path="/depository/ad-hoc" component={DepositoryAdHoc} />
          <Route path="/depository/create-subscription" component={ CreateSubscription } />
          <Route path="/depository/update-subscription" component={ UpdateSubscription } />
          <Route path="/depository/delete-subscription" component={ DeleteSubscription } />
          <Route path="/depository/dataset-data-profile" component={ DatasetDataProfile } />
          <Route path="/depository/dataset-data-quality" component={ DatasetDataQuality } />

          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />

          <Route path="/form-Elements/basic-elements" component={ BasicElements } />

          <Route path="/tables/basic-table" component={ BasicTable } />

          <Route path="/icons/font-awesome" component={ FontAwesome } />

          <Route path="/charts/chart-js" component={ ChartJs } />


          <Route path="/user-pages/login-1" component={ Login } />


          <Route path="/user-pages/error-404" component={ Error404 } />
          <Route path="/user-pages/error-500" component={ Error500 } />

          <Route path="/user-pages/blank-page" component={ BlankPage } />

         
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;