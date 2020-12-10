import './App.css';
import AddTodos from './components/AddItems';
import { ListDetails } from './components/ListDetails';
import ListProvider from './context/ListProvider';
import AddItems from './components/AddItems';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header">Todo List</Header>
        <Content className="content">
          <ListProvider>
            <AddItems />
            <ListDetails />
          </ListProvider>
        </Content>
      </Layout>
      
    </div>
  );
}

export default App;
