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
    
    /* background-color: #e0e0e0;     */
  }

  #root {
    max-width: 416px;
    width: 100%;
    min-height: 100vh; 
    background-color: white;

    --blue-button1-color: #4636fc;
    --blue-button1hover-color: #3b29fb;

    --white-button2-color:#f2f3f7;
    --blue-button2hover-color: #e0e0e0bc;

    --landing-Button1-color: #5170fd;
    --landing-Button2-color: #4636fc;
    --landing-Flexible-color: white;

    --AuctionDetail-BackButton-color: #f0f0f0;
    --AuctionDetail-userLocation-color: gray;
    --AuctionDetail-UnderLine-color: #cccccc;
    --AuctionDetail-NothingMessage-color: #5e5e5e;

    --BiddingDetail-BackButton-color:#f0f0f0;
    --BiddingDetail-userLocation-color:gray;
    --BiddingDetail-UnderLine-color:#cccccc;

    --Header-SelectBox-color:white;
    --Header-Line-color:#cccccc;

    --ChatItem-UserInfo-color: gray;
    --ChatItem-UnderLine-color: #dfdfdf;

    --Gnb-Container-color: white;
    --Gnb-Line-color: #cccccc;

    --Chatting-AuctionLine-color: #cccccc;
    --Chatting-span-color: red;
    --Chatting-Buttom-color: white;
    --Chatting-Buttom1-color: #dcdcdc;
    --Chatting-Buttom2-color: #dfdfdf;
    --Chatting-AdminContent-color: #7c43f8;
    --Chatting-Content-color: #f2f3f6;
    --Chatting-ContentTime-color: #9c9c9c;
    --Chatting-UserContent-color: #4b3bfa;
    --Chatting-UserContentTime-color: #9c9c9c;
    --Chatting-SendImg-color: #595959;
    --Chatting-SendImg1-color: #868686;
    --Chatting-ChattingInput-color: #f2f3f6;
    --Chatting-SubmitButton-color: #7e7e7e;
    --Chatting-SubmitButton1-color: #a6a6a6;
    --Chatting-DeleteButton-color: #626262;

    --Main-CreateAuctionButton-color: #4636fc; 

    --Search-SearchInput-color: #ebebeb;
    --Search-SearchLine-color: #cccccc;

    --ItemDot-Dots-color: white;

    --Footer-FooterLine-color:#cccccc;
    --Footer-BiddingButton-color:#4636fc;
    --Footer-BiddingButtonhover-color:#5170fd;

    --item-Period-color: gray;
    --item-AuctionState-color: red;
    --item-Line-color: #cccccc;

    --ConfirmModal-ModalWrapper-color:rgba(0, 0, 0, 0.5);

    --ItemEditModal-ModalWrapper-color:rgba(0, 0, 0, 0.5);

    /* ================================================================================ */
    
    --MyPage-Line-color:#f2f3f6;

    --PWCheckModal-ModalWrapper-color:rgba(0, 0, 0, 0.5);
    --PWCheckModal-ModalContainer-color: white;
    --PWCheckModal-WarningText-color: red;

    --Modal-ModalContainer-color: white;

    --UserEditHeader-Wrapper-color:  #f6f6f8;
    --MyPageHeader-Line-color: #cccccc;

    --UserPageTop-ProfileIcon-color: black; 

    --UserInfo-IconContainer-color: black;

    --UserEditBody-Wrapper-color: red;
    --UserEditBody-ProfileContainer-color: gray;
    --UserEditBody-ProfileInput-color: blue;

    --MyAuction-StyledLink-color: black;
    --MyAuction-BottomSelector-color: white;

    --LogOutModal-ModalWrapper-color: rgba(0, 0, 0, 0.5);
    --LogOutModal-ModalContainer-color: white;

    --ChangePassword-InputTitle-color: red;
    --ChangePassword-InputField-color: #f5f5f5;
    --ChangePassword-InputFieldInput-color: #aaaaaa;

    --UnderAuction-AuctionDisplay-color: #f2f3f7;
    --UnderAuction-AuctionItemDisplay-color: white;
    --UnderAuction-ContentArea-color: #d1d3d7;

    --AuctionCompleted-AuctionDisplay-color: #f2f3f7;
    --AuctionCompleted-AuctionItemDisplay-color: #d1d3d7;

    




    /* ================================================================================ */


  }


  @media screen  and (min-width: 416px) {
    #root{
      max-width:1024px; 
    }
  }

`;

export default App;
