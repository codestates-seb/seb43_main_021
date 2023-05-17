import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Chat from "./pages/Chat";
import Chatting from "./pages/Chatting";
import AuctionDetail from "./pages/AuctionDetail";
import BiddingDetail from "./pages/BiddingDetail";
import BiddingList from "./pages/BiddingList";
import Category from "./pages/Category";
import ChangePw from "./pages/ChangePw";
import CreateAuction from "./pages/CreateAuction";
import CreateBidding from "./pages/CreateBidding";
import FavoriteList from "./pages/FavoriteList";
import Login from "./pages/Login";
import MyAuctionList from "./pages/MyAuctionList";
import MyPage from "./pages/MyPage";
import Notice from "./pages/Notice";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";
import UserEdit from "./pages/UserEdit";
import { createGlobalStyle } from "styled-components";
import Landing from "./pages/Landing";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chatting" element={<Chatting />} />
        <Route path="/category" element={<Category />} />
        <Route path="/createauction" element={<CreateAuction />} />
        <Route path="/createbidding" element={<CreateBidding />} />
        <Route path="/auctiondetail/:auctionId" element={<AuctionDetail />} />
        <Route
          path="/biddingdetail/:auctionId/:biddingId"
          element={<BiddingDetail />}
        />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/biddinglist" element={<BiddingList />} />
        <Route path="/favoritelist" element={<FavoriteList />} />
        <Route path="/myauctionlist" element={<MyAuctionList />} />
        <Route path="/changepw" element={<ChangePw />} />
        <Route path="/useredit" element={<UserEdit />} />
      </Routes>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e0e0e0;    
  }

  #root {
    max-width: 416px;
    width: 100%;
    min-height: 100vh; 
    background-color: white;
  }

  @media screen  and (min-width: 416px) {
    #root{
      max-width:1024px;      
    }
  }

`;

export default App;
