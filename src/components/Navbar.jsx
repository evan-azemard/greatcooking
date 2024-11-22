import { Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";



export function Navbar() {
    return (
        <Layout>
          <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
              MyApp
            </div>
            <Menu theme="dark" mode="horizontal" style={{ minWidth: "300px" }}>
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/movies">Movies</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/favorites">Favorites</Link>
              </Menu.Item>
            </Menu>
          </Header>
        </Layout>
      );
    }