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
import Alarm from "./pages/Alarm";

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
        <Route
          path="/createbidding/:auctionItemId"
          element={<CreateBidding />}
        />
        <Route
          path="/auctiondetail/:auctionItemId"
          element={<AuctionDetail />}
        />
        <Route
          path="/biddingdetail/:auctionItemId/:bidItemId"
          element={<BiddingDetail />}
        />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/biddinglist" element={<BiddingList />} />
        <Route path="/favoritelist" element={<FavoriteList />} />
        <Route path="/myauctionlist" element={<MyAuctionList />} />
        <Route path="/changepw" element={<ChangePw />} />
        <Route path="/useredit" element={<UserEdit />} />
        <Route path="/alarm" element={<Alarm />} />
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
  }

  #root {
    max-width: 416px;
    width: 100%;
    min-height: 100vh; 
    


    
  --white1-color: #ffffff;
  --white2-color: #f2f3f7;
  --white3-color: #e3e6e8;
  --white4-color: #dfdfdf;
  --white5-color: #cccccc;
  --white6-color: #aaaaaa;
  --purple1-color: #5170fd;
  --purple2-color: #4636fc;
  --purple3-color: #3b29fb;
  --purple4-color: #7c43f8;
  --red1-color:#ff0000;
  --blackCover-color: rgba(0, 0, 0, 0.5);
  --black1-color: #000000;
  --blue1-color: #0000ff;
  --gray1-color: #808080;
  --gray2-color: #9c9c9c;
  --gray2-hover-color: #e0e0e0bc;
  --gray3-color: #9c9c9c;
  --purple4-color: #7c43f8;
  --orange1-color: #ff7e36;

  }


  @media screen  and (min-width: 416px) {
    #root{
      max-width:1024px; 
    }
  }

`;

export default App;
