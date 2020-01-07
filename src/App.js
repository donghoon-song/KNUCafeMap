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

function App() {
  const { Header, Footer } = Layout;
  return (
    <>
      <Header></Header>
      <Content leftComponent={leftContent} rightComponent={rightContent}>
      </Content>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
