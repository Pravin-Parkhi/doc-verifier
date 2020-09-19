import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Auth from '../app/auth/auth.component'
import DocVerify from '../app/doc-verify/doc-verify.component'
import BaseLayout from '../common/base-layout/base-layout.component'

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <BaseLayout>
          <Route exact path='/' render={() => (<Redirect to='/auth' />)} />
          <Route exact path='/auth' component={Auth} />
          <Route exact path='/doc-verify' component={DocVerify} />
        </BaseLayout>
      </Switch>
    </BrowserRouter>
  )
}