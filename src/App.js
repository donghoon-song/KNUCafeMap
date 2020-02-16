import React from 'react';
import CafeMap from './components/CafeMap';
import CafeList from './components/CafeList';
import CafeInfo from './components/CafeInfo';
import Content from './components/Content';
import { Layout } from 'antd';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import 'antd/dist/antd.css';

const leftContent = < RenderAfterNavermapsLoaded
  ncpClientId={"7026fmnqar"}
>
  <CafeMap />
  <CafeList />
</RenderAfterNavermapsLoaded >

const rightContent = <CafeInfo />

const containerStyle = {
  width: '100vw',
  height: '100vh',
}

function App() {
  const { Header, Footer } = Layout;
  return (
    <>
      <div className="container" style={containerStyle}>
        <Header></Header>
        <Content leftComponent={leftContent} rightComponent={rightContent}>
        </Content>
        {/* <Footer></Footer> */}
      </div>
    </>
  );
}

export default App;
