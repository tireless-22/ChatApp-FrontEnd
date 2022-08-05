import logo from './logo.svg';
import './App.css';
import { CgProfile } from "react-icons/cg"
// import { AiOutlineVideoCamera } from "react-icons/ai"
// import {IoCallOutline} from "react-icons/io5"
// import { IoSearchSharp } from "react-icons/io5"
// import { BiDotsHorizontalRounded } from "react-icons/bi";
import styled from 'styled-components';
import ChatBackground from "./Images/chatbackGround.jpg"
import { useEffect, useState } from 'react';
import { GiCaptainHatProfile, GiConsoleController } from "react-icons/gi"
import { ImKey, ImProfile } from "react-icons/im"
import Modal from "react-modal"
import axios from 'axios';
import {AiOutlineSend} from "react-icons/ai"
import {IoMdSend} from "react-icons/io"
import CoverImagePhoto from "./Images/coverCheck.jpg"




const MainContainer = styled.div`
  display:flex;
  flex-direction: column;
  height: 100vh;
  width:100vw;
  position: static;

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
  height: 100vh;
  border-right: 2px white solid;
`;
const MainLeftHeader = styled.div`
height:60px;
display: flex;
flex-direction: row;
/* justify-content: left; */
/* flex:1; */
background-color: #202c33;
/* justify-content: center; */
align-items: center;
`
const OneToOneDiv = styled.div`
display: flex;
flex: 1;
border-right:1px solid white;
height: 100%;
justify-content: center;
align-items: center;
color:white;



`
const OneToOneButton = -styled.button`
height: 30px;




`

const GroupsDiv = styled.div`
display: flex;
flex:1;
justify-content: center;
align-items: center;
color:white;



`
const GroupButton = styled.button`
height: 30px;

`


const MainLeftBody = styled.div`
/* height: ; */
/* flex:8; */
display: flex;
max-height:inherit;
flex-direction: column;

background-color:gray;

`;

const SeachbarDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: black;
border-bottom: 1px solid white;
/* flex:1; */

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
  /* height: 100%; */
  position: static;
  /* overflow-x: scroll; */
  overflow-x: hidden;
  /* overflow-y:hidden; */
  background-color: #111b21;
  /* -webkit-scrollbar:none ; */
  flex: 11;
  /* overflow: scroll; */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChatCard = styled.div`
  height: 70px;
  background-color: #111b21;
  /* border-bottom:2px solid white; */
  width: 100%;
  color: white;
  display: flex;
  flex-direction: left;
  align-items: center;
`;
const ChatCardProfile = styled.div`
display: flex;
align-items: center;
height: 100%;
flex:1;





`
const ChatCardNumber = styled.div`
display: flex;
align-items: center;
height: 100%;
flex:4;
border-bottom : 0.5px solid gray;






`









const MainRight = styled.div`
  flex: 10;
  display: flex;
  flex-direction: column;
  height: 100%;
  /* position:static; */
  /* border: 1px white solid; */
`;

const MainRightHeader = styled.div`
  height: 60px;
  background-color: #202c33;
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
  padding: 10px;
  background-color: #128c72;
  border-top-left-radius:10px ;
  border-bottom-left-radius:10px;
`;

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

`;

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
height: 350px;
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
const H4white = styled.h3`
  color: white;
  font-weight: 400;
  font-size: 20px;
  border: 0px;
  margin: 10px;
`;


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

const FailureParagraph = styled.p`
  margin:0px;

  color:red;

`


const SuccessParagraph = styled.p`
  color: green;
`;

const FailureInfoBox = styled.div`
display: flex;
justify-content: center;
`


const MsgTextBoxDiv = styled.div`
display:flex;




`

const MsgTextBox = styled.div`
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  
`;



const CoverPage = styled.div`
display: flex;
flex-direction:row;






`

const CoverPhoto = styled.div`
display: flex;
flex:7;




`

const CoverImage = styled.img`
height: 100vh;
width: 100%;



`

const CoverRegisterAndLogin = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3a3b3c;
  flex-direction: column;
`;

const CoverLoginButton = styled.button`
  width: 90%;
  height: 50px;
  border-radius: 15px;
  color: white;
  background-color: #128c72;
`;
const CoverRegisterButton = styled.button`
  width: 90%;
  height: 50px;
  border-radius: 15px;
  color: white;
  background-color: #128c72;
  margin-bottom: 40px;
`;

const MsgsBody = styled.div`

  position: static;

  overflow-x: hidden;

  /* background-color: blue; */
  

  flex: 11;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MsgsEditor = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  
  justify-content: left;
  background-color: #202c33;
  align-items: center;
`;

const MsgsEditorTextBox = styled.input`
margin-left:15px;
  height: 40px;
  width: 90%;
  background-color: #343f46;
  color: white;
  border: 1px solid black;
  border-radius: 9px;
`;
const MsgsEditorSend = styled.div`
  border-radius: 50%;
  padding-left:8px ;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #128c72;
  height: 45px;
  width: 40px;
  margin-left: 10px;
`;


const MessagesAll = styled.div`

  display: flex;
  flex-direction: column;
  position: relative;

`
const SomeThingMessage = styled.div`
display: flex;



`


const LeftMessage = styled.div`

  background-color: #202c33;
  color: white;
  margin: 5px 0px;
  padding-right: 10px;
  border-radius: 10px;
  margin-left:5%;
  max-width: 60%;
  padding:5px;
  float: left;
  





`;

const RightMessage = styled.div`
  padding-left: 10px;
  background-color: #128c72;
  margin: 5px 0px;

  float: right;
  margin-right: 5%;
  border-radius: 10px;

  max-width: 60%;
`;















function App() {

 


  
  const [login, setLogin] = useState(0);
  const [guest, setGuest] = useState(0);
  const [messagesDataOneToOne, setmessagesDataOneToOne] = useState();



  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [registerInfo, setRegisterInfo] = useState("");
  const [loginInfo, setLoginInfo] = useState(""); 
  const [textBoxMessage, setTextBoxMessage] = useState("");


   /* function Login() {
     closeLoginModal();
     setLogin(true);
   } */
  
  
  
   const [recentMessages, setRecentMessages] = useState();

   useEffect(() => {
     const RecentMessages = async () => {
       const res = await axios.get(
         `http://localhost:9090/knk/recent?number=${login}`
       );
       setRecentMessages(res.data);
     };
     RecentMessages();
   }, [login]);
  
  const Login = () => {
    
    console.log(number);
    console.log(password);
    axios.post(`http://localhost:9090/knk/login?number=${number}&password=${password}`)
      .then((res) => {
        console.log(res);
        if (res.data!==0) {
          console.log("check1")
          console.log(res.data);
          closeLoginModal();
          setLogin(res.data);

        }
        else {
          console.log("check2")
          setLoginInfo("please check your credentials")
          
        }
    })
     closeLoginModal();
     /* setLogin(); */


  }


  
  
  const Register = () => {

    console.log(number);
    console.log(password);
    axios.post(
      `http://localhost:9090/knk/register?number=${number}&password=${password}`
    )
      .then((res) => {
        console.log(res);
        /* true or false */
        /* setRegisterInfo(res.data); */
        if (res.data===1) {
          console.log("check1")
          console.log(res.data);
          
          closeRegisterModal();
          openLoginModal();
          
        }
        else {
          console.log("check2")
          console.log(res.data);
          setRegisterInfo("user already existed")


          
        }

      
    })
      .catch((e) => {
        console.log(e);
      })


    
  }

  const onChat=async(guest_num) => {
  
    /* console.log(guest);
    
    
    */
    console.log(guest_num);
    console.log(login);
    


    const res = await axios.get(`http://localhost:9090/knk/messagesOneToOne?number=${login}&guest=${guest_num}`)
    setmessagesDataOneToOne(res.data);
    console.log(res);
    setGuest(guest_num);
    console.log(typeof(login))






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
  /* console.log(login) */

  const sendMessage = async () => {
    console.log(textBoxMessage);
    let msg=textBoxMessage.trim()
    if (msg.length !== 0) {
        await axios
          .post(
            `http://localhost:9090/knk/sendMessage?number=${login}&guest=${guest}&data=${msg}`
          )
          .then((res) => {
            console.log(res.data);
          })
          .catch((e) => {
            console.log(e);
          });
      


    }
   
    }



  return (
    <MainContainer>
      {login === 0 ? (
        <CoverPage>
          <CoverPhoto>
            <CoverImage src={CoverImagePhoto} />
          </CoverPhoto>

          <CoverRegisterAndLogin>
            <CoverRegisterButton
              onClick={() => {
                openRegisterModal();
              }}
            >
              Register
            </CoverRegisterButton>
            <CoverLoginButton
              onClick={() => {
                openLoginModal();
              }}
            >
              Login
            </CoverLoginButton>
          </CoverRegisterAndLogin>
        </CoverPage>
      ) : (
        <MainBody>
          <MainLeft>
            <MainLeftHeader>
              <OneToOneDiv>1-1 Chats</OneToOneDiv>
              <GroupsDiv>Group Chats</GroupsDiv>
            </MainLeftHeader>
            <SeachbarDiv>
              <InputBox placeholder=" Search your contacts here"></InputBox>
            </SeachbarDiv>

            <ChatsBody>
              {recentMessages.map((d) => (
                <ChatCard
                  onClick={() => {
                    onChat(d);
                  }}
                >
                  <ChatCardProfile>
                    <CgProfile size={50} />
                  </ChatCardProfile>
                  <ChatCardNumber>
                    <H4white>{d}</H4white>
                  </ChatCardNumber>
                </ChatCard>
              ))}
            </ChatsBody>
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
                {login !== 0 ? (
                  <ButtonsContainer>
                    {/* if logged in */}
                    <ProfileButton>
                      <ImProfile color="white"></ImProfile>
                      {login}
                    </ProfileButton>
                    <Button onClick={() => setLogin(0)}>Logout</Button>
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
              </MainRightHeaderRight>
            </MainRightHeader>
            <div
              style={{
                overflowX: "hidden",

                flex: 11,

                backgroundImage: `url(${ChatBackground})`,
                width: "100%",

                position: "static",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <MsgsBody>
                {guest !== 0 ? (
                  <MessagesAll>
                    {messagesDataOneToOne.map((msg) => (
                      <div>
                        {parseInt(msg.sender_id) === login ? (
                          <RightMessage>
                            <H4white>{msg.data}</H4white>
                          </RightMessage>
                        ) : (
                          <LeftMessage>
                            <H4white>{msg.data}</H4white>
                          </LeftMessage>
                        )}
                      </div>
                    ))}
                  </MessagesAll>
                ) : (
                  <SomeThingMessage>
                    <h1>Hello there</h1>
                  </SomeThingMessage>
                )}
              </MsgsBody>
            </div>

            <MsgsEditor>
              <MsgsEditorTextBox
                onChange={(e) => {
                  setTextBoxMessage(e.target.value);
                }}
              ></MsgsEditorTextBox>
              <MsgsEditorSend
                onClick={(e) => {
                  sendMessage();
                }}
              >
                <IoMdSend color="white" size={35}></IoMdSend>{" "}
              </MsgsEditorSend>
            </MsgsEditor>
          </MainRight>
        </MainBody>
      )}
      {/* <IoMdSend color="white" size={40}></IoMdSend> */}
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
            <ModalInput
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            ></ModalInput>
          </ModalInputContainer>

          <LabelContainer>
            <H5white>Passwrod</H5white>
          </LabelContainer>
          <ModalInputContainer>
            <ModalInput
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></ModalInput>
          </ModalInputContainer>

          <ModalButttonContainer>
            <ModalButton
              onClick={() => {
                Register();
              }}
            >
              Register
            </ModalButton>
          </ModalButttonContainer>
          <FailureInfoBox>
            <FailureParagraph>{registerInfo}</FailureParagraph>
          </FailureInfoBox>
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
            <H3white>LOGIN</H3white>
          </ModalHeadingContainer>
          <LabelContainer>
            <H5white>Phone Number</H5white>
          </LabelContainer>
          <ModalInputContainer>
            <ModalInput
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            ></ModalInput>
          </ModalInputContainer>
          <LabelContainer>
            <H5white>Password</H5white>
          </LabelContainer>
          <ModalInputContainer>
            <ModalInput
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></ModalInput>
          </ModalInputContainer>

          <ModalButttonContainer>
            <ModalButton
              onClick={() => {
                Login();
              }}
            >
              Login
            </ModalButton>
          </ModalButttonContainer>
        </ModalContainer>
      </Modal>
    </MainContainer>
  );
}

export default App;
