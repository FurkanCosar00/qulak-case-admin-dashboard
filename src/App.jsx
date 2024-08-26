import { useEffect, useState } from 'react'
import './bootstrap.min.css'
import './App.css'

function App() {
   return (
    <div className="main d-flex flex-column flex-md-row bg-body-tertiary">
      <Header />
      <SideSection />
      <Content />
    </div>
  )
}

function Header() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }}, [theme])

  return (
    <div className="header d-flex d-md-none justify-content-between align-items-center p-3 bg-white border-bottom">
      <img className='headerPageLogo p-1' src="./assets/images/header-images/headerPageLogo.png" alt="" />

      <button className="hamburgerMenu btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <img className='p-2' src="./assets/images/header-images/headerHamburger.png" alt="" />
      </button>

      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-body">
          <div className="canvasSideSection d-flex">
            <div className="sideBar border-start border-end d-flex flex-column justify-content-between py-3">
              <div className="sidebarTop d-flex flex-column gap-4">
                <div className="sidebarTitle d-flex align-items-center gap-3 px-4">
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  <h5>Lookscout Dashboard</h5>
                </div>

                <input className='mx-4 px-3 py-1 border-secondary border-opacity-10 rounded-1' type="text" placeholder='Search here...' />

                <ul className='d-flex flex-column gap-1'>
                  <li className='d-flex align-items-center gap-3 px-4 py-2'><img src="./assets/images/sidebar-images/general.png" alt="" />General</li>
                  <li className='d-flex align-items-center justify-content-between px-4 py-2'>
                    <span className='d-flex align-items-center gap-3'><img src="./assets/images/sidebar-images/messages.png" alt="" />Messages</span>
                    <img src="./assets/images/sidebar-images/notificationCounter.png" alt="" />
                  </li>
                  <li className='d-flex align-items-center gap-3 px-4 py-2'><img src="./assets/images/sidebar-images/notifications.png" alt="" />Notifications</li>
                  <li className='d-flex align-items-center gap-3 px-4 py-2'><img src="./assets/images/sidebar-images/users.png" alt="" />Users</li>
                  <li className='d-flex align-items-center gap-3 px-4 py-2 border-start border-primary border-3 bg-primary bg-opacity-10'><img src="./assets/images/sidebar-images/eventslogs.png" alt="" />Events & Logs</li>
                  <li className='d-flex align-items-center gap-3 px-4 py-2'><img src="./assets/images/sidebar-images/organization.png" alt="" />Organization</li>
                  <li className='d-flex align-items-center gap-3 px-4 py-2'><img src="./assets/images/sidebar-images/teams.png" alt="" />Teams</li>
                </ul>
              </div>

              <div className="sidebarBottom d-flex flex-column gap-4">
                <div className="bottomTitle d-flex align-items-center gap-3 px-4 py-2">
                  <img src="./assets/images/sidebar-images/profilePicture.png" alt="" />
                  <p>Brian Ford</p>
                  <img src="./assets/images/sidebar-images/dots.png" alt="" />
                </div>

                <div className="subscriptionPlan d-flex align-items-start justify-content-between flex-wrap mx-4 bg-body-tertiary p-3 rounded-3">
                  <img src="./assets/images/sidebar-images/inProgress.png" alt="" />
                  <img src="./assets/images/sidebar-images/closeCross.png" alt="" />
                  <div className="subsText">
                    <h6>Subscription Plan</h6>
                    <p>Your Subscription plan will expire soon please upgrade!</p>
                  </div>
                  <h6 className='text-primary'>Upgrade</h6>
                </div>
              </div>
            </div>

            <div className="sideIcons d-flex flex-column justify-content-between p-3">
              <ul>
                <li><img className='headerHamburgerLogo' src="./assets/images/side-icon-images/sidebarIcon.png" alt="" /></li>
                <li><img src="./assets/images/side-icon-images/searchIcon.png" alt="" /></li>
                <li><img src="./assets/images/side-icon-images/collapseIcon.png" alt="" /></li>
                <li><img src="./assets/images/side-icon-images/calendarIcon.png" alt="" /></li>
                <li><img src="./assets/images/side-icon-images/graphicIcon.png" alt="" /></li>
              </ul>

              <ul>
                <li><button className='mobileDarkMode' onClick={() => setTheme(theme === "dark" ? "light" : "dark")}><img className='darkMode' src="./assets/images/side-icon-images/darkMode.png" alt="" /></button></li>
                <li><img src="./assets/images/side-icon-images/settingsIcon.png" alt="" /></li>
                <li><img src="./assets/images/side-icon-images/exitIcon.png" alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

function SideSection() {
  return (
    <div className="sideSection d-none d-md-flex bg-white">
      <SideIcons />
      <SideBar />
    </div>
  )
}

function SideIcons() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }}, [theme])

    return (
    <div className="sideIcons d-flex flex-column justify-content-between p-3">
      <ul className='sideTop'>
        <li><img className='otherImages' src="./assets/images/side-icon-images/sidebarIcon.png" alt="" /></li>
        <li><img className='otherImages' src="./assets/images/side-icon-images/searchIcon.png" alt="" /></li>
        <li><img className='general bg-primary bg-opacity-10' src="./assets/images/side-icon-images/general.png" alt="" /></li>
        <li><img className='otherImages' src="./assets/images/side-icon-images/calendarIcon.png" alt="" /></li>
        <li><img className='otherImages' src="./assets/images/side-icon-images/graphicIcon.png" alt="" /></li>
      </ul>

      <ul className='sideBottom'>
        <li>
          <button className='darkMode' onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <img className='otherImages' src="./assets/images/side-icon-images/darkMode.png" alt="" />
          </button>
        </li>

        <li><img className='otherImages' src="./assets/images/side-icon-images/settingsIcon.png" alt="" /></li>
        <li><img className='otherImages' src="./assets/images/side-icon-images/exitIcon.png" alt="" /></li>
      </ul>
    </div>
  )
}

function SideBar() {
  return (
      <div className="sideBar border-start border-end d-flex flex-column justify-content-between py-3">
        <div className="sidebarTop d-flex flex-column gap-4">
          <div className="sidebarTitle d-flex align-items-center gap-3 px-4">
            <img src="./assets/images/sidebar-images/backArrow.png" alt="" />
            <h5>Lookscout Dashboard</h5>
          </div>

          <input className='mx-4 px-3 py-1 border-secondary border-opacity-10 rounded-1' type="text" placeholder='Search here...'/>

          <ul className='d-flex flex-column gap-1'>
            <li className='d-flex align-items-center gap-3 px-4 py-2'><img className='topImg' src="./assets/images/sidebar-images/general.png" alt="" />General</li>
            <li className='d-flex align-items-center justify-content-between px-4 py-2'><span className='d-flex align-items-center gap-3'><img className='topImg' src="./assets/images/sidebar-images/messages.png" alt="" />Messages</span> <img src="./assets/images/sidebar-images/notificationCounter.png" alt="" /></li>
            <li className='d-flex align-items-center gap-3 px-4 py-2'><img className='topImg' src="./assets/images/sidebar-images/notifications.png" alt="" />Notifications</li>
            <li className='d-flex align-items-center gap-3 px-4 py-2'><img className='topImg' src="./assets/images/sidebar-images/users.png" alt="" />Users</li>
            <li className='events d-flex align-items-center gap-3 px-4 py-2 border-start border-primary border-3 bg-primary bg-opacity-10'><img src="./assets/images/sidebar-images/eventslogs.png" alt="" />Events & Logs</li>
            <li className='d-flex align-items-center gap-3 px-4 py-2'><img className='topImg' src="./assets/images/sidebar-images/organization.png" alt="" />Organization</li>
            <li className='d-flex align-items-center gap-3 px-4 py-2'><img className='topImg' src="./assets/images/sidebar-images/teams.png" alt="" />Teams</li>
          </ul>
        </div>

        <div className="sidebarBottom d-flex flex-column gap-4">
          <div className="bottomTitle d-flex align-items-center gap-3 px-4 py-2">
            <img src="./assets/images/sidebar-images/profilePicture.png" alt="" />
            <p>Brian Ford</p>
            <img className='sidebarBottomWhite' src="./assets/images/sidebar-images/dots.png" alt="" />
          </div>

          <div className="subscriptionPlan d-flex align-items-start justify-content-between flex-wrap mx-4 bg-body-tertiary p-3 rounded-3">
            <img src="./assets/images/sidebar-images/inProgress.png" alt="" />
            <img className='sidebarBottomWhite' src="./assets/images/sidebar-images/closeCross.png" alt="" />
            <div className="subsText">
              <h6>Subscription Plan</h6>
              <p>Your Subscription plan will expire soon please upgrade!</p>
            </div>
            <h6 className='text-primary'>Upgrade</h6>
          </div>
        </div>
      </div>
  )
}

function Content() {
  return (
    <div className="content d-flex flex-column gap-4 py-4">
      <Graphics />
      <AdvancedGraphic />
      <TeamMaterialsTransactions />
    </div>
  )
}

function Graphics() {
  return (
    <div className="graphics">
      <div className="contentTitle">
        <p className=' d-none d-md-block'>Home / Settings / <span className='text-primary'>General</span></p>
        <p className=' d-block d-md-none m-0'>/ Back</p>
      </div>
      <div className="textsAndTitle d-md-flex justify-content-between align-items-start mb-3">
        <div className="graphicsTexts">
          <h4>Hey there, Brian Ford!</h4>
          <p>Welcome back, we're happy to have you here!</p>
        </div>

        <div className="titleButtons d-flex gap-3 justify-content-between">
          <button className='editBtn btn btn-outline-dark px-3'>Edit section</button>
          <button className='btn btn-primary px-4'>Add item</button>
          <button className='btn btn-outline-dark d-md-none px-2'>
            <img src="./assets/images/lookscout-team-images/dots.png" alt="" />
          </button>
        </div>
      </div>

      <div className="graphicBoxes d-flex flex-column flex-md-row gap-4">
        <div className="revenue d-flex flex-wrap justify-content-between align-items-start bg-white p-3 rounded-3 border">
          <h6>Revenue</h6>
          <img src="./assets/images/lookscout-team-images/dots.png" alt="" />

          <div className="dollar">
            <h4>$390</h4>
            <p><span>New</span> monthly growth</p>
          </div>
          
          <img src="./assets/images/graphics-images/blueChart.png" alt="" />
        </div>

        <div className="revenue d-flex flex-wrap justify-content-between align-items-start bg-white p-3 rounded-3 border">
          <h6>Expenses</h6>
          <img src="./assets/images/lookscout-team-images/dots.png" alt="" />

          <div className="dollar">
            <h4>$680</h4>
            <p><span>global</span> monthly growth</p>
          </div>
          
          <img src="./assets/images/graphics-images/redChart.png" alt="" />
        </div>

        <div className="revenue d-flex flex-wrap justify-content-between align-items-start bg-white p-3 rounded-3 border">
          <h6>Expenses</h6>
          <img src="./assets/images/lookscout-team-images/dots.png" alt="" />

          <div className="dollar">
            <h4>$680</h4>
            <p><span>intuitive</span> monthly growth</p>
          </div>
          
          <img src="./assets/images/graphics-images/greenChart.png" alt="" />
        </div>
      </div>
    </div>
  );
}

function AdvancedGraphic() {
  useEffect(() => {
    let options = {
      series: [{
          name: 'interfaces',
          data: [40, 25, 60, 90, 20, 45, 10, 5, 80, 50, 30, 90]
      }, {
          name: 'build-ups',
          data: [30, 20, 40, 60, 10, 25, 5, 3, 70, 40, 20, 70]
      }],
      chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
              show: false
          },
          zoom: {
              enabled: true
          }
      },
      colors: ['#3B82F6', '#60A5FA'],
      plotOptions: {
          bar: {
              horizontal: false,
              borderRadius: 3,
              borderRadiusApplication: 'end',
              borderRadiusWhenStacked: 'last',
              columnWidth: '25%',
          },
      },
      xaxis: {
          categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
          axisBorder: {
            show: true,
            color: '#7d7d7d51'
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: '#A5ACBA'
          }
        }
      },
      yaxis: {
          min: 0,
          max: 100,
          tickAmount: 4,
          labels: {
              formatter: function (val) {
                  return val + "%";
              }
          },
          labels: {
            style: {
              colors: '#A5ACBA'
            }
          }
      },
      grid: {
          borderColor: '#7d7d7d51',
          strokeDashArray: 4,
      },
      fill: {
          opacity: 1
      },
      legend: {
          position: 'top',
          offsetY: 0,
          horizontalAlign: 'right',
          floating: true,
      },
      dataLabels: {
          enabled: false
      }
    };
  
    let chart = new ApexCharts(document.querySelector(".chart"), options);
    chart.render();
  
    return () => {
      chart.destroy();
    };
  }, []);
  
  return (
    <div className="advancedGraphic bg-white border rounded-3">
      <div className="advancedHeader d-flex align-items-center justify-content-between p-3">
        <h5>Advanced Graphic</h5>
        <img src="./assets/images/lookscout-team-images/dots.png" alt="" />
      </div>

      <div className='chart border-bottom border-top pt-3'></div>

      <div className="advancedFooter d-flex align-items-center justify-content-between p-3">
        <p>Data graph</p>
        <p className='d-flex align-items-center gap-2'>
          <span className='text-primary'>Open</span>
          <img src="./assets/images/advanced-graphic-images/external.png" alt="" />
        </p>
      </div>
    </div>
  );
}

function TeamMaterialsTransactions() {
  return (
    <div className="section3">
      <div className="textsAndTitle d-md-flex justify-content-between align-items-start mb-3">
        <h4>Brian Ford</h4>

        <div className="titleButtons d-flex gap-3 justify-content-between">
          <button className='editBtn btn btn-outline-dark px-3'>Edit section</button>
          <button className='btn btn-primary px-4'>Add item</button>
          <button className='btn btn-outline-dark d-md-none px-2'><img src="./assets/images/lookscout-team-images/dots.png" alt="" /></button>
        </div>
      </div>

      <div className="teamMaterialsTransactions d-flex flex-column flex-md-row gap-4">
      <div className="teamArea  px-4 border rounded-3 bg-white">
        <div className="teamText d-flex align-items-center py-3 justify-content-between">
          <h5>Lookscout Team</h5>
          <img src="./assets/images/lookscout-team-images/dots.png" alt="" />
        </div>

        <div className="team">
          <div className="teamItem d-flex align-items-center py-3 justify-content-between border-bottom">
            <div className="profile d-flex align-items-center gap-2">
              <img src="./assets/images/lookscout-team-images/latoya.png" alt="" />

              <div className="ItemText">
                <p className='text-secondary-emphasis'>Latoya Langosh</p>
                <p className='text-secondary '>Dynamic</p>
              </div>
            </div>

            <p className='d-flex align-items-center gap-3'><span className='text-primary bg-primary bg-opacity-10 px-2 rounded'>Online</span> <img src="./assets/images/lookscout-team-images/goArrow.png" alt="" /></p>
          </div>

          <div className="teamItem d-flex align-items-center py-3 justify-content-between border-bottom">
            <div className="profile d-flex align-items-center gap-2">
              <img src="./assets/images/lookscout-team-images/abel.png" alt="" />

              <div className="ItemText">
                <p className='text-secondary-emphasis'>Abel Mohr</p>
                <p className='text-secondary '>Dynamic</p>
              </div>
            </div>
            
            <p className='d-flex align-items-center gap-3'><span className='text-primary bg-primary bg-opacity-10 px-2 rounded'>Online</span> <img src="./assets/images/lookscout-team-images/goArrow.png" alt="" /></p>
          </div>

          <div className="teamItem d-flex align-items-center py-3 justify-content-between border-bottom">
            <div className="profile d-flex align-items-center gap-2">
              <img src="./assets/images/lookscout-team-images/shari.png" alt="" />

              <div className="ItemText">
                <p className='text-secondary-emphasis'>Shari Stamm</p>
                <p className='text-secondary '>Chief</p>
              </div>
            </div>
            
            <p className='offline d-flex align-items-center gap-3'><span className='text-secondary-emphasis bg-body-tertiary px-2 rounded'>Offline</span> <img src="./assets/images/lookscout-team-images/goArrow.png" alt="" /></p>
          </div>

          <div className="teamItem d-flex align-items-center py-3 justify-content-between border-bottom">
            <div className="profile d-flex align-items-center gap-2">
              <img src="./assets/images/lookscout-team-images/earl.png" alt="" />

              <div className="ItemText">
                <p className='text-secondary-emphasis'>Earl Johnson</p>
                <p className='text-secondary '>National</p>
              </div>
            </div>
            
            <p className='offline d-flex align-items-center gap-3'><span className='text-secondary-emphasis bg-body-tertiary px-2 rounded'>Offline</span> <img src="./assets/images/lookscout-team-images/goArrow.png" alt="" /></p>
          </div>

          <div className="teamItem d-flex align-items-center py-3 justify-content-between border-bottom">
            <div className="profile d-flex align-items-center gap-2">
              <img src="./assets/images/lookscout-team-images/erick.png" alt="" />

              <div className="ItemText">
                <p className='text-secondary-emphasis'>Erick Champlin</p>
                <p className='text-secondary '>Central</p>
              </div>
            </div>
            
            <p className='d-flex align-items-center gap-3'><span className='text-primary bg-primary bg-opacity-10 px-2 rounded'>Online</span> <img src="./assets/images/lookscout-team-images/goArrow.png" alt="" /></p>
          </div>
        </div>

        <button className='btn btn-primary my-3'>View all</button>
      </div>

      <div className="materialArea  px-4 border rounded-3 bg-white">
        <div className="materialsText d-flex align-items-center py-3 justify-content-between">
          <h5>Updated Materials</h5>
          <img src="./assets/images/lookscout-team-images/dots.png" alt="" />
        </div>

        <div className="material">
          <div className="materialItem d-flex align-items-center py-3 justify-content-between border-bottom">
            <div className="profile d-flex align-items-center gap-2">
              <img src="./assets/images/lookscout-materials-images/pdf.png" alt="" />

              <div className="ItemText">
                <p className='text-secondary-emphasis'>Lookscout Resources</p>
                <p className='text-secondary '>80.69 mb</p>
              </div>
            </div>

            <img src="./assets/images/lookscout-materials-images/download.png" alt="" />
          </div>

          <div className="materialItem d-flex align-items-center py-3 justify-content-between border-bottom">
            <div className="profile d-flex align-items-center gap-2">
              <img src="./assets/images/lookscout-materials-images/mp4.png" alt="" />

              <div className="ItemText">
                <p className='text-secondary-emphasis'>Lookscout Updates</p>
                <p className='text-secondary '>320.32 mb</p>
              </div>
            </div>

            <img src="./assets/images/lookscout-materials-images/download.png" alt="" />
          </div>

          <div className="materialItem d-flex align-items-center py-3 justify-content-between border-bottom">
            <div className="profile d-flex align-items-center gap-2">
              <img src="./assets/images/lookscout-materials-images/pdf.png" alt="" />

              <div className="ItemText">
                <p className='text-secondary-emphasis'>Lookscout Guides</p>
                <p className='text-secondary '>320.32 mb</p>
              </div>
            </div>

            <img src="./assets/images/lookscout-materials-images/circle.png" alt="" />
          </div>

          <div className="materialItem d-flex align-items-center py-3 justify-content-between border-bottom">
            <div className="profile d-flex align-items-center gap-2">
              <img src="./assets/images/lookscout-materials-images/zip.png" alt="" />

              <div className="ItemText">
                <p className='text-secondary-emphasis'>Lookscout Design System</p>
                <p className='text-secondary '>320.32 mb</p>
              </div>
            </div>

            <img src="./assets/images/lookscout-materials-images/circle.png" alt="" />
          </div>

          <div className="materialItem d-flex align-items-center py-3 justify-content-between border-bottom">
            <div className="profile d-flex align-items-center gap-2">
              <img src="./assets/images/lookscout-materials-images/mp4.png" alt="" />

              <div className="ItemText">
                <p className='text-secondary-emphasis'>Lookscout Guides</p>
                <p className='text-secondary '>125.05 mb</p>
              </div>
            </div>

            <img src="./assets/images/lookscout-materials-images/download.png" alt="" />
          </div>
        </div>

        <div className="materialButtons d-flex gap-2">
          <button className='cancelBtn btn btn-outline-dark my-3'>Cancel</button>
          <button className='btn btn-primary my-3'>Upload</button>
        </div>
      </div>

      <div className="transactionArea  px-4 border rounded-3 bg-white">
        <div className="transactionText d-flex align-items-center py-3 justify-content-between">
          <h5>Recent Transactions</h5>
        </div>

        <div className="transaction">
          <div className="transactionItem d-flex align-items-center py-3 justify-content-between border-bottom">
            <div className="profile d-flex align-items-center gap-2">
              <img src="./assets/images/lookscout-transactions-images/pinterest.png" alt="" />

              <div className="ItemText">
                <p className='text-secondary-emphasis'>Pinterest Team</p>
                <p className='text-secondary '>Jan 23 2022</p>
              </div>
            </div>

            <p className='done d-flex align-items-center gap-3 text-success bg-success bg-opacity-10 px-2 rounded'>Done</p>
          </div>

          <div className="transactionItem d-flex align-items-center py-3 justify-content-between border-bottom">
            <div className="profile d-flex align-items-center gap-2">
              <img src="./assets/images/lookscout-transactions-images/sketch.png" alt="" />

              <div className="ItemText">
                <p className='text-secondary-emphasis'>Sketch Team</p>
                <p className='text-secondary '>Jun 15 2022</p>
              </div>
            </div>

            <p className='failed d-flex align-items-center gap-3 text-danger bg-danger bg-opacity-10 px-2 rounded'>Failed</p>
          </div>

          <div className="transactionItem d-flex align-items-center py-3 justify-content-between border-bottom">
            <div className="profile d-flex align-items-center gap-2">
              <img src="./assets/images/lookscout-transactions-images/gitlab.png" alt="" />

              <div className="ItemText">
                <p className='text-secondary-emphasis'>Gitlab Team</p>
                <p className='text-secondary '>Jan 15 2022</p>
              </div>
            </div>

            <p className='done d-flex align-items-center gap-3 text-success bg-success bg-opacity-10 px-2 rounded'>done</p>
          </div>

          <div className="transactionItem d-flex align-items-center py-3 justify-content-between border-bottom">
            <div className="profile d-flex align-items-center gap-2">
              <img src="./assets/images/lookscout-transactions-images/clickup.png" alt="" />

              <div className="ItemText">
                <p className='text-secondary-emphasis'>Clickup Team</p>
                <p className='text-secondary '>Jan 15 2022</p>
              </div>
            </div>

            <p className='failed d-flex align-items-center gap-3 text-danger bg-danger bg-opacity-10 px-2 rounded'>Failed</p>
          </div>

          <div className="transactionItem d-flex align-items-center py-3 justify-content-between border-bottom">
            <div className="profile d-flex align-items-center gap-2">
              <img src="./assets/images/lookscout-transactions-images/deliverooo.png" alt="" />

              <div className="ItemText">
                <p className='text-secondary-emphasis'>Deliverooo Team</p>
                <p className='text-secondary '>Jan 15 2022</p>
              </div>
            </div>

            <p className='done d-flex align-items-center gap-3 text-success bg-success bg-opacity-10 px-2 rounded'>done</p>
          </div>

        </div>

        <div className="transactionBottom d-flex align-items-start gap-2 my-3">
          <p className='text-primary'>Open</p>
          <img src="./assets/images/lookscout-transactions-images/external.png" alt="" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
