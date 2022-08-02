import logo from './logo.svg';
import './App.css';
import { CgProfile } from "react-icons/cg"
// import { AiOutlineVideoCamera } from "react-icons/ai"
// import {IoCallOutline} from "react-icons/io5"
// import { IoSearchSharp } from "react-icons/io5"
// import { BiDotsHorizontalRounded } from "react-icons/bi";
import styled from 'styled-components';
import ChatBackground from "./Images/chatbackGround.jpg"
import { useState } from 'react';
import { GiCaptainHatProfile } from "react-icons/gi"
import { ImKey, ImProfile } from "react-icons/im"
import Modal from "react-modal"




const MainContainer = styled.div`
  display:flex;
  flex-direction: column;
  height: 100vh;
  width:100vw;

`

const TopGreen = styled.div`
  height: 35px;
  width: 100vw;
  background-color: #128c72;
`;
const MainBody = styled.div`
display: flex;
flex-direction: row;
height: 100%;


`
const MainLeft = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 100%;
  border-right: 2px white solid;
`;
const MainLeftHeader = styled.div`
height: 60px;
background-color: #3a3b3c;
justify-content: center;
align-items: center;
`

const MainLeftBody = styled.div`
height: 100%;
display: flex;
flex-direction: column;

background-color:gray;

`;

const SeachbarDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: black;
border-bottom: 1px solid white;

height:50px ;
`

const InputBox = styled.input`
height: 32px;

border-radius:10px;
border-color:2px;
width:95%;
color:white;



background-color: #040720;


`

const ChatsBody = styled.div`
height: 100%;
background-color: black;
/* overflow: scroll; */



`

const ChatCard = styled.div`
height: 50px;
background-color: black;
border-bottom:2px solid white;
width: 100%;
color:white;


`




const MainRight = styled.div`
  flex: 10;
  display: flex;
  flex-direction: column;
  height: 100%;
  /* border: 1px white solid; */
`;

const MainRightHeader = styled.div`
  height: 60px;
  background-color: #3a3b3c;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MainRightHeaderLeft = styled.div`
display:flex;
flex-direction: row;


`
const MainRightHeaderLeftName = styled.div`
color:white;
`

const MainRightHeaderRight = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding:10px;

`

const IconDiv = styled.div`
margin-left: 15px;
margin-right:15px;

`
const Linediv = styled.div`
  background-color: white;
  height: 100%;
  width: 1px;
  margin-left: 10px;
  margin-right: 10px;

`


const ButtonsContainer = styled.div`
display: flex;
flex-direction: row;



`

const Button = styled.button`
padding:10px 15px;
background-color: #000;
color:white;
border:1px solid white;
border-radius: 10px;
margin:0px 10px;




`

const ProfileButton = styled.button`
  padding: 10px 15px;
  background-color: #000;
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  margin: 0px 10px; 
`;




const ModalContainer = styled.div`
display: flex;
height: 325px;
width: 280px;
background-color: black;
flex-direction: column;
/* border: 1px solid white; */



`

const ModalHeadingContainer = styled.div`
display: flex;
justify-content: center;
top:0px;


`


const H3white = styled.h3`
color:white;
font-weight: 400;
font-size: 24px;
border: 0px;
margin:10px;




`

const ModalInputContainer = styled.div`

display:flex;
justify-content: center;
align-items: center;


`
const ModalInput = styled.input`
  width: 80%;
  height: 40px;
  border-radius: 15px;
  border: 1px solid white;
  background-color: #333;
  margin:0px 0px 30px 0px;
`;
const ModalButttonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const ModalButton = styled.button`
  padding: 15px 10 px;
  background-color: #128c72;
  border: 1px solid white;
  width: 80%;
  height: 40px;
  border-radius: 15px;
  margin:0px 0px 30px 0px;
  color:white;

`;


const LabelContainer = styled.div`
color: white;
display: flex;
margin:0px;

/* justify-content: center; */
/* align-items: center; */
/* left:40%; */
/* margin:0px; */

 


`

const H5white = styled.h5`
font-size: 15px;
font-weight: 200;
margin:0px;
margin-bottom: 10px;
margin-left:26px



`




const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    background: "black",
    borderRadius:"20px",
  
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};








function App() {


  
  const [login, setLogin] = useState(false);


  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);


   function Login() {
     closeLoginModal();
     setLogin(true);
   }

  function openRegisterModal() {
    setRegisterModal(true);
  }

  function closeRegisterModal() {
    setRegisterModal(false);
  }



  function openLoginModal() {
    setLoginModal(true);
    // setLogin(true);
  }

  function closeLoginModal() {
    setLoginModal(false);
  }




  const LeftNavUser = [
    {
      id: 1,
      nameOfTheChat: "something",
      lastMessageUser: "some name",
      lastMessage: "some message here",
      lastMessageTime: "22/2/2022",
    },
    {
      id: 2,
      nameOfTheChat: "something",
      lastMessageUser: "some name",
      lastMessage: "some message here",
      lastMessageTime: "22/2/2022",
    },
    {
      id: 3,
      nameOfTheChat: "something",
      lastMessageUser: "some name",
      lastMessage: "some message here",
      lastMessageTime: "22/2/2022",
    },
    {
      id: 4,
      nameOfTheChat: "something",
      lastMessageUser: "some name",
      lastMessage: "some message here",
      lastMessageTime: "22/2/2022",
    },
    {
      id: 5,
      nameOfTheChat: "something",
      lastMessageUser: "some name",
      lastMessage: "some message here",
      lastMessageTime: "22/2/2022",
    },
    {
      id: 6,
      nameOfTheChat: "something",
      lastMessageUser: "some name",
      lastMessage: "some message here",
      lastMessageTime: "22/2/2022",
    },
    {
      id: 7,
      nameOfTheChat: "something",
      lastMessageUser: "some name",
      lastMessage: "some message here",
      lastMessageTime: "22/2/2022",
    },
    {
      id: 8,
      nameOfTheChat: "something",
      lastMessageUser: "some name",
      lastMessage: "some message here",
      lastMessageTime: "22/2/2022",
    },
   

  ];



  return (
    <MainContainer>
      <TopGreen></TopGreen>
      <MainBody>
        <MainLeft>
          <MainLeftHeader>
            <div>
              <CgProfile color="white" size="50px" />
            </div>
          </MainLeftHeader>
          <MainLeftBody>
            <SeachbarDiv>
              <InputBox placeholder=" Search your contacts here"></InputBox>
            </SeachbarDiv>
            <ChatsBody>
              {LeftNavUser.map((d) => (
                <ChatCard>
                  <p>{d.nameOfTheChat}</p>
                </ChatCard>
              ))}
            </ChatsBody>
          </MainLeftBody>
        </MainLeft>
        <MainRight>
          <MainRightHeader>
            <MainRightHeaderLeft>
              <CgProfile color="white" size="50px" />
              <MainRightHeaderLeftName>
                <p>name here</p>
              </MainRightHeaderLeftName>
            </MainRightHeaderLeft>
            <MainRightHeaderRight>
              {login ? (
                <ButtonsContainer>
                  {/* if logged in */}
                  <ProfileButton>
                    <ImProfile color="white"></ImProfile>
                    Profile
                  </ProfileButton>
                  <Button onClick={() => setLogin(false)}>Logout</Button>
                </ButtonsContainer>
              ) : (
                <ButtonsContainer>
                  <Button
                    onClick={() => {
                      openRegisterModal();
                    }}
                  >
                    Register
                  </Button>
                  <Button
                    onClick={() => {
                      openLoginModal();
                    }}
                  >
                    Login
                  </Button>
                  {/* if not logged in */}
                </ButtonsContainer>
              )}

              {/* <IconDiv>
                <AiOutlineVideoCamera size="25px" color="white" />
              </IconDiv>
              <IconDiv>
                <IoCallOutline size="25px" color="white" />
              </IconDiv>
              <Linediv></Linediv>
              <IconDiv>
                <IoSearchSharp size="25px" color="white" />
              </IconDiv>

              <IconDiv>
                <BiDotsHorizontalRounded size="25px" color="white" />
              </IconDiv> */}
            </MainRightHeaderRight>
          </MainRightHeader>

          <div
            style={{
              backgroundImage: `url(${ChatBackground})`,
              width: "100%",
              height: "100%",
            }}
          ></div>
        </MainRight>
      </MainBody>
      {/* Modal for Registration */}
      <Modal
        isOpen={registerModal}
        onRequestClose={closeRegisterModal}
        style={customStyles}
      >
        <ModalContainer>
          <ModalHeadingContainer>
            <H3white>REGISTRATION</H3white>
          </ModalHeadingContainer>
          <LabelContainer>
            <H5white>Phone Number</H5white>
          </LabelContainer>
          <ModalInputContainer>
            <ModalInput></ModalInput>
          </ModalInputContainer>
          <LabelContainer>
            <H5white>Phone Number</H5white>
          </LabelContainer>
          <ModalInputContainer>
            <ModalInput></ModalInput>
          </ModalInputContainer>

          <ModalButttonContainer>
            <ModalButton>Register</ModalButton>
          </ModalButttonContainer>
        </ModalContainer>
      </Modal>
      {/* Modal for Login */}

      <Modal
        isOpen={loginModal}
        onRequestClose={closeLoginModal}
        style={customStyles}
      >
        <ModalContainer>
          <ModalHeadingContainer>
            <H3white>REGISTRATION</H3white>
          </ModalHeadingContainer>
          <LabelContainer>
            <H5white>Phone Number</H5white>
          </LabelContainer>
          <ModalInputContainer>
            <ModalInput></ModalInput>
          </ModalInputContainer>
          <LabelContainer>
            <H5white>Phone Number</H5white>
          </LabelContainer>
          <ModalInputContainer>
            <ModalInput></ModalInput>
          </ModalInputContainer>

          <ModalButttonContainer>
            <ModalButton onClick={()=>{Login()}}>Login</ModalButton>
          </ModalButttonContainer>
        </ModalContainer>
      </Modal>
    </MainContainer>
  );
}

export default App;
