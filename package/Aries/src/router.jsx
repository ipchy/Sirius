/**
 * 前端路由配置，也是所有页面的入口。
 * 注意：require.ensure 实现代码按页面分割，动态加载，详细参考 webpack 文档
 */

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { createHistory } from 'history'
import env from './env'
import App from './App'

export default render((
  <Router onUpdate={() => window.scrollTo(0, 0)} history={createHistory()}>
    <Route path={env.basePath} component={App}>
      <IndexRoute getComponent={(location, cb) => {
        require.ensure([], require => {
          cb(null, require('./functions/Overview').default)
        })
      }}/>
      <Route path="UserAuth">
        <Route path="SpaceList" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/UserAuth/SpaceList').default)
          })
        }}/>
      </Route>
      <Route path="HDFS">
        <Route path="Myfile" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/HDFS/Myfile').default)
            })
        }}/>
        <Route path="Share" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/HDFS/Share').default)
          })
        }}/>
        <Route path="ShowShare/:hash" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/HDFS/ShowShare').default)
          })
        }}/>
        <Route path="ShareCenter" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/HDFS/ShareCenter').default)
          })
        }}/>
        <Route path="Trash" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/HDFS/Trash').default)
          })
        }}/>
        <Route path="Service" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/HDFS/Service').default)
          })
        }}/>
        <Route path="Capacity" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/HDFS/Capacity').default)
          })
        }}/>
      </Route>
      <Route path="CalcManage">
        <Route path="Overview" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/CalcManage/Overview').default)
          })
        }}/>
        <Route path="PodInfo" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/CalcManage/ClusterInfo/podinfo').default)
          })
        }}/>
        <Route path="ServiceInfo" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/CalcManage/ClusterInfo/serviceinfo').default)
          })
        }}/>
        <Route path="ReplicationControllerInfo" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/CalcManage/ClusterInfo/rcinfo').default)
          })
        }}/>
        <Route path="MyTask" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/CalcManage/MyTask').default)
          })
        }}/>
        <Route path="CreateCluster">
          <Route path='CC1' getComponent={(location, cb) => {
            require.ensure([], require => {
              cb(null, require('./functions/CalcManage/CreateCluster/CC1').default)
              })
          }}/>
          <Route path='CC2' getComponent={(location, cb) => {
            require.ensure([], require => {
              cb(null, require('./functions/CalcManage/CreateCluster/CC2').default)
              })
          }}/>
        </Route>
       </Route>



      <Route path="openstack">
        <Route path="instances" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/Openstack/instances').default)
          })
        }}/>
         <Route path="create" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/Openstack/create_host').default)
          })
        }}/>

        <Route path="images" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/Openstack/images').default)
          })
        }}/>

        <Route path="flavors" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/Openstack/flavors').default)
          })
        }}/>
        
        <Route path="volumes" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/Openstack/volumes').default)
          })
        }}/>
        
        <Route path=":id" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/Openstack/host_list').default)
          })
        }}/>
      </Route>

       <Route path="CodisCloud">
         <Route path="CodisInfo" getComponent={(location, cb) => {
           require.ensure([], require => {
             cb(null, require('./functions/Codis/CodisInfo').default)
           })
         }}/>
         <Route path="HostInfo" getComponent={(location, cb) => {
           require.ensure([], require => {
             cb(null, require('./functions/Codis/HostInfo').default)
           })
         }}/>
       </Route>

      <Route path="login" getComponent={(location, cb) => {
        require.ensure([], require => {
          cb(null, require('./functions/Login').default)
        })
      }}/>
      <Route path="*" getComponent={(location, cb) => {
        require.ensure([], require => {
          cb(null, require('./functions/NotFound').default)
        })
      }}/>
    </Route>
  </Router>
), document.getElementById('app'))
