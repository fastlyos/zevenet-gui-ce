/**
  * @license
  * Zevenet Software License
  * This file is part of the Zevenet Load Balancer software.
  *
  * Copyright (C) 2019-today ZEVENET SL, Sevilla (Spain)
  * Licensed under the terms of the GNU Affero General Public License.
  * See License.txt in the project root for license information.
**/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkComponent } from './network.component';
import { NicComponent } from './nic/nic.component';
import { NicUpdateComponent } from './nic/nic-update.component';
import { VlanComponent } from './vlan/vlan.component';
import { VlanCreateComponent } from './vlan/vlan-create.component';
import { VlanUpdateComponent } from './vlan/vlan-update.component';
import { VirtualComponent } from './virtual/virtual.component';
import { VirtualCreateComponent } from './virtual/virtual-create.component';
import { VirtualUpdateComponent } from './virtual/virtual-update.component';
import { GatewayComponent } from './gateway/gateway.component';
import { GatewayConfigureComponent } from './gateway/gateway-configure.component';
import { MyBreadcrumbsResolver } from '../../@core/zevenet/services/breadcrumb.resolver';

const routes: Routes = [{
  path: '',
  component: NetworkComponent,
  children: [{
    path: '',
    redirectTo: 'nic',
    pathMatch: 'full',
  },
  {
    path: 'nic',
    component: NetworkComponent,
    data: {
      breadcrumbs: MyBreadcrumbsResolver,
      text: 'NIC',
    },
    children: [
      {
        path: '',
        redirectTo: 'list',
       pathMatch: 'full',
      }, {
        path: 'list',
        component: NicComponent,
      }, {
        path: 'edit/:name',
        component: NicUpdateComponent,
        data: {
          breadcrumbs: MyBreadcrumbsResolver,
          text: 'Edit',
        },
      },
    ],
  },
  {
    path: 'vlan',
    component: NetworkComponent,
    data: {
      breadcrumbs: MyBreadcrumbsResolver,
      text: 'VLAN',
    },
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      }, {
        path: 'list',
        component: VlanComponent,
      }, {
        path: 'create',
        component: VlanCreateComponent,
        data: {
          breadcrumbs: MyBreadcrumbsResolver,
          text: 'Create',
        },
      }, {
        path: 'edit/:name',
        component: VlanUpdateComponent,
        data: {
          breadcrumbs: MyBreadcrumbsResolver,
          text: 'Edit',
        },
      },
    ],
  },
  {
    path: 'virtual',
    component: NetworkComponent,
    data: {
      breadcrumbs: MyBreadcrumbsResolver,
      text: 'Virtual Interfaces',
    },
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      }, {
        path: 'list',
        component: VirtualComponent,
      }, {
        path: 'create',
        component: VirtualCreateComponent,
        data: {
          breadcrumbs: MyBreadcrumbsResolver,
          text: 'Create',
        },
      }, {
        path: 'edit/:name',
        component: VirtualUpdateComponent,
        data: {
          breadcrumbs: MyBreadcrumbsResolver,
          text: 'Edit',
        },
      },
    ],
  },
  {
    path: 'gateway',
    component: NetworkComponent,
    data: {
      breadcrumbs: MyBreadcrumbsResolver,
      text: 'Gateway',
    },
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      }, {
        path: 'list',
        component: GatewayComponent,
      }, {
        path: 'configure/:name',
        component: GatewayConfigureComponent,
        data: {
          breadcrumbs: MyBreadcrumbsResolver,
          text: 'Configure',
        },
      },
    ],
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworkRoutingModule { }

export const routedComponents = [
  NetworkComponent,
  NicComponent,
  NicUpdateComponent,
  VlanComponent,
  VlanCreateComponent,
  VlanUpdateComponent,
  VirtualComponent,
  VirtualCreateComponent,
  VirtualUpdateComponent,
  GatewayComponent,
  GatewayConfigureComponent,
];
