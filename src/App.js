import React from 'react';
import CafeMap from './components/CafeMap';
import CafeList from './components/CafeList';
import { Layout } from 'antd';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import 'antd/dist/antd.css';

const ContentStyle = {
  padding: "0 1.2rem 0 1.2rem"
}

function App() {
  const { Header, Footer, Content } = Layout;
  return (
    <Layout>
      <Header></Header>
      <Content style={ContentStyle}>
        <RenderAfterNavermapsLoaded
          ncpClientId={"7026fmnqar"}
        >
          <CafeMap />
          <CafeList />
        </RenderAfterNavermapsLoaded >
      </Content>
      <Footer></Footer>
    </Layout>



  );
}

export default App;
