import logo from './logo.svg';
import './App.css';
import { CgLogOut, CgProfile } from "react-icons/cg"
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
// import CoverImagePhoto from "./Images/coverCheck.jpg"
import CoverPhoto from "./Images/coverPhoto.jpg"
import {BsFillPlusCircleFill} from "react-icons/bs"
import { TiTick } from "react-icons/ti";
import InputEmoji from "react-input-emoji";
import One from "./Images/1.png";
import Two from "./Images/2.png";
import Three from "./Images/3.png";
import Four from "./Images/4.png";
import Five from "./Images/5.png";
import Six from "./Images/6.png";
import Seven from "./Images/7.png";
import People from "./Images/people.png"
import { useRef } from "react"



const Images = [
  One,Two,Three,Four,Five,Six,Seven
]



const Logo = styled.img`
  width: 45px;
  height: 45px;
  margin-left: 10px;
  /* margin: 15px; */
`;





 const colors = [
   "#53bdeb",
   "#e26ab6",
   "#00a884",
   "#a5b337",
   "#fc9775",
   "a791ff",
   "#ffbc38",
 ];
  

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
  background-color: #35e3c1;
`;
const MainBody = styled.div`
display: flex;
flex-direction: row;
height: 100%;


`
const MainLeft = styled.div`
  flex: 3;
  display: flex;
  min-width: 250px;
  flex-direction: column;
  background-color: #1b1a47;
  height: 100vh;
  border-right: 2px #555 solid;
`;
const MainLeftHeader = styled.div`
  height: 50px;
  /* Modification3 */
  display: flex;
  flex-direction: row;
  /* justify-content: left; */
  /* flex:1; */
  background-color: #303056;
  /* justify-content: center; */
  align-items: center;
`;
const H4white = styled.h3`
  color: white;
  font-weight: 400;
  font-size: 20px;
  border: 0px;
  margin: 5px;
`;
const OneToOneDiv = styled.div`
  display: flex;
  flex: 1;
  border-right: 1px solid #ccc;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;

  background-color: ${(props) => (props.oneTwoOne ? "#1b1a47" : "#303056")};
  color: ${(props) => (props.oneTwoOne ? "black" : "white")};
`;
const OneToOneButton = -styled.button`
height: 30px;




`

const GroupsDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100%;
  cursor: pointer;
  background-color: ${(props) => (props.oneTwoOne ? "#303056" : "#1b1a47")};
  color: white;
`;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #1b1a47;
  color: #1b1a47;
  border-bottom: 1px solid #555;
  cursor: pointer;

  /* flex:1; */

  height: 50px;
`;

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
  background-color: #303056;
  /* -webkit-scrollbar:none ; */
  flex: 11;
  /* overflow: scroll; */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChatCard = styled.div`
  /* #Modification1 */
  /* height: 70px; */
  height: 60px;
  background-color: #303056;
  /* border-bottom:2px solid white; */
  width: 100%;
  color: white;
  display: flex;
  flex-direction: left;
  align-items: center;

  /* Modification2 */
  border-bottom: 0.5px solid gray;




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

cursor: pointer;






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
  height: 50px;
  /* Modification3 */
  background-color: #303056;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MainRightHeaderLeft = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;


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
  background-color: #1b1a47;
  /* Modification4 */
  /* border-top-left-radius:10px ; */
  /* border-bottom-left-radius:10px; */
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



const Linediv2 = styled.div`
  background-color: white;
  height: 70%;
  width: 1px;
  margin-left: 10px;
  margin-right: 10px;
`;


const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;

`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #303056;
  color: white;
  border-width: 0px ;

  border-radius: 10px;
  margin: 0px 10px;
  cursor: pointer;
`;

const ProfileButton = styled.div`
display: flex;
flex-direction: left;
justify-content: center;
align-items: center;


`;




const ModalContainer = styled.div`
  display: flex;
  height: 350px;
  width: 280px;
  background-color: white;
  flex-direction: column;
  /* border: 1px solid white; */
`;
const ModalContainer2 = styled.div`
  display: flex;
  height: 250px;
  width: 280px;
  background-color: white;
  flex-direction: column;
  /* border: 1px solid white; */
`;




const ModalHeadingContainer = styled.div`
display: flex;
justify-content: center;
top:0px;


`


const H3white = styled.h3`
  color: black;
  font-weight: 400;
  font-size: 24px;
  border: 0px;
  margin-bottom: 3px;
  margin-left: 5px;
`;


const H4black = styled.h3`
  color: black;
  font-weight: 400;
  font-size: 20px;
  border: 0px;
  margin: 5px;
`;



const H4white3 = styled.h3`
  color: black;
  font-weight: 400;
  font-size: 16px;
  border: 0px;
  margin: 5px;
`;



const H4white2 = styled.h3`
  color: white;
  font-weight: 400;
  font-size: 16px;
  border: 0px;
  margin-bottom: 3px;
  margin-left: 5px;
  margin-top: 0px;
  margin-right:5px;
`;



const ModalInputContainer = styled.div`

display:flex;
justify-content: center;
align-items: center;


`
const ModalInput = styled.input`
  width: 80%;
  height: 40px;
  color:black;
  border-radius: 15px;
  border: 1px solid white;
  background-color: white;
  margin:0px 0px 30px 0px;
  border:1px solid gray;
`;
const ModalButttonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const ModalButton = styled.button`
  padding: 15px 10 px;
  background-color: #1b1a47;
  border: 1px solid white;
  width: 80%;
  height: 40px;
  border-radius: 15px;
  margin: 0px 0px 30px 0px;
  color: white;
  cursor: pointer;
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


const H5black = styled.h5`
  font-size: 17px;
  font-weight: 400;
  margin: 0px;
  color:black;
  margin-bottom: 10px;
  margin-left: 26px;
`;

const H5white2 = styled.h5`
  font-size: 15px;
  font-weight: 200;
  margin: 5px;
  color:${props=>colors[props.sender%6]};
  /* margin-bottom: 5px; */
  /* margin-left: 26px; */
`;









const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    background: "#1B1A47",
    borderRadius: "20px",

    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
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
  border: 1px solid #1b1a47;
  border-radius: 10px;
`;



const CoverPage = styled.div`
display: flex;
flex-direction:row;






`



const CoverImage = styled.img`
height: 100vh;
width: 100%;



`

const CoverRegisterAndLogin = styled.div`
  /* flex: 2; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #3a3b3c; */
  flex-direction: column;
`;

const CoverLoginButton = styled.button`
  /* width: 50%; */
  width: 500px;
  height: 50px;
  border-radius: 15px;
  color: black;
  background-color: #303056;
  cursor: pointer;
`;
const CoverRegisterButton = styled.button`
  /* width: 50%; */
  width: 500px;
  justify-content: center;
  height: 50px;
  border-radius: 15px;
  color: black;
  background-color: #303056;
  margin-bottom: 20px;
  cursor: pointer;
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
  background-color: white;
  align-items: center;
`;

const MsgsEditorTextBox = styled.input`
  margin-left: 15px;
  height: 40px;
  width: 90%;
  background-color: #343f46;
  color: white;
  border: 1px solid #1b1a47;
  border-radius: 9px;
`;
const MsgsEditorSend = styled.div`
  border-radius: 50%;
  padding-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1fe0ba;
  height: 45px;
  width: 40px;
  margin-left: 10px;
  cursor: pointer;
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
  background-color: white;
  color: black;
  margin: 5px 0px;
  padding-right: 10px;
  
  border-radius: 10px;
  margin-left: 5%;
  max-width: 60%;
  padding: 5px;
  float: left;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 12%);
`;

const RightMessage = styled.div`
  /* padding-left: 10px; */
  padding: 5px;
  background-color: white;
  margin: 5px 0px;
  float: right;
  margin-right: 5%;
  border-radius: 10px;

  max-width: 60%;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 12%);
`;


const BlockAndUnBlockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`

const BlockButton = styled.div`

  color: white;
 cursor: pointer;
  
  
`;

const UnBlockButton = styled.div`



color:white;
cursor: pointer;


`

const HeadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  /* background-color: red; */
`;

const Heading = styled.div`
  text-align: center;

  /* text-transform: uppercase; */
  font-size: 72px;
  letter-spacing: 1px;
  color: #fff;
  color: #1b1a47;

  display: grid;
  /* grid-template-columns: 1fr auto 1fr; */
  /* grid-template-rows: 16px 0; */
  grid-gap: 22px;
`;














function App() {


 

 

  const messagesEndRef = useRef(null);
  
  const [login, setLogin] = useState(0);
  const [guest, setGuest] = useState("ChatApp");
  const [blockOrNot, setBlockOrNot] = useState(true);
  const [messagesDataOneToOne, setmessagesDataOneToOne] = useState();
  const [oneTwoOne, setOneTwoOne] = useState(true);
  const [guestGroup, setGuestGroup] = useState("ChatApp Groups");
  const [messagesInGroup, setMessageInGroup] = useState();
  const [convModal, setConvModal] = useState(false);
  const [addGrpModal, setAddGrpModal] = useState(false);
  const [lastSeenId, setLastSeenId] = useState(0);
  




  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [registerInfo, setRegisterInfo] = useState("");

  const [textBoxMessage, setTextBoxMessage] = useState("");
  const theme = "dark";


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
  
  
  
    
   const [recentGrps, setRecentGrps] = useState();

   useEffect(() => {
     const RecentGrps = async () => {
       const res = await axios.get(
         `http://localhost:9090/knk/recentGroups?number=${login}`
       );
       setRecentGrps(res.data);
     };
     RecentGrps();
   }, [login]);
  
  /* setTimeout(async () => {
    if (guest !== 0) {
      if (login !== 0) {
        await updateMessages();
      }
    }
    
  }, 7000); */



  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom();
  }, [messagesDataOneToOne]);


   const SettingLogin = () => {
     /* axios.get("http://localhost:9090/knk/NumberFromJwt"); */

     axios
       .get("http://localhost:9090/knk/NumberFromJwt", {
         headers: {
           number: sessionStorage.getItem("number"), //the token is a variable which holds the token
         },
       })
       .then((res) => {
         const nameL = res.data.slice(8, res.data.length - 3);
         setLogin(parseInt(nameL));
         /* console.log(res.data); */
       });
   };

   SettingLogin();
  
  

  
  
  
  
  const Login = () => {
    
    /* console.log(number); */
    /* console.log(password); */
    axios.post(`http://localhost:9090/knk/HashLogin?number=${number}&password=${password}`)
      .then((res) => {
        /* console.log(res); */
        if (res.data!==0) {
          /* console.log("check1") */
          /* console.log(res.data); */
          closeLoginModal();
          sessionStorage.setItem("number", res.data);
          setGuest("ChatApp");
          setGuestGroup("ChatApp Groups");
          SettingLogin();
          setLogin(number);
          closeLoginModal();

          /* setLogin(res.data); */
          /* setLofin */

          /* setLogin(1); */

        }
        else {
          /* console.log("check2") */
          setRegisterInfo("please check your credentials");
          /* setLoginInfo("please check your credentials") */
          
        }
    })
     
     /* setLogin(); */


  }


  
  
  const Register = () => {

    /* console.log(number); */
    /* console.log(password); */
    axios.post(
      `http://localhost:9090/knk/Hashing?number=${number}&password=${password}`
    )
      .then((res) => {
        /* console.log(res); */
        /* true or false */
        /* setRegisterInfo(res.data); */
        if (res.data===1) {
          /* console.log("check1") */
          /* console.log(res.data); */
          
          closeRegisterModal();
          openLoginModal();
          
        }
        else {
          /* console.log("check2") */
          /* console.log(res.data); */
          setRegisterInfo("user already existed")


          
        }

      
    })
      .catch((e) => {
        console.log(e);
      })


    
  }


  const onChatGrps = async (guest_grps) => {
    /* console.log(guest);
    */
    /* console.log(guest_num); */
    /* console.log(login); */
    const res = await axios.get(
      `http://localhost:9090/knk/messageInGroups?guest_group=${guest_grps}`
    );
    setMessageInGroup(res.data);
    /* console.log(res.data); */
    /* console.log(guest_grps); */
    setGuestGroup(guest_grps); 
  };

  const onChat=async(guest_num) => {
    /* console.log(guest);
    */
    /* console.log(guest_num); */
    /* console.log(login); */
    const res = await axios.get(`http://localhost:9090/knk/messagesOneToOne?number=${login}&guest=${guest_num}`)
    setmessagesDataOneToOne(res.data);
    /* console.log(res); */
    setGuest(guest_num);
    /* console.log(typeof (login)) */
    const res1 = await axios.get(
      `http://localhost:9090/knk/blockOrNot?number=${login}&guest=${guest_num}`
    );
    setBlockOrNot(res1.data);
    /* console.log(res1.data); */



    const lastMsgId = messagesDataOneToOne[messagesDataOneToOne.length - 1].msg_id;
    console.log(login)
    console.log(guest);
    console.log(lastMsgId);

    axios.post(
      `http://localhost:9090/knk/updationOfLastSeen?userMain=${login}&user=${guest}&msgId=${lastMsgId}`
    ).then((res) => {
      console.log("messageId updated")
    })
      .catch((e) => {
        console.log(e);
      })
    

    /* setLastSeenId */

    axios.get(
      `http://localhost:9090/knk/gettingLastSeenMsg?userMain=${guest}&user=${login}`
    ).then((res) => {

      setLastSeenId(res.data);
      console.log(res.data);

    })
      .catch((e) => {
        console.log(e);
        
      
      })
    
    console.log(lastSeenId);
    

    
    

    

  }




  const UnBlock = async () => {
    console.log("checker")
    console.log(number);
    console.log(guest)                            
    await axios.post(
      `http://localhost:9090/knk/unblock?number=${login}&guest=${guest}`
    ).then((res) => {
      console.log(res.data);
      console.log("form block funtion")
    })
    BlockedOrNot();


  }

  const Block = async => {


      console.log("checker");
      console.log(number);
      console.log(guest);  
     axios.post(
       `http://localhost:9090/knk/block?number=${login}&guest=${guest}`
     ).then((res) => {
       console.log(res.data);
     })
     BlockedOrNot();
    

  }




  const BlockedOrNot =  async () => {
    console.log("chcek")
    const res1 = await axios.get(
      `http://localhost:9090/knk/blockOrNot?number=${login}&guest=${guest}`
    );
    setBlockOrNot(res1.data);

    console.log(res1.data);
    
  }


  const updateMessages = async() => {
    const res = await axios.get(`http://localhost:9090/knk/messagesOneToOne?number=${login}&guest=${guest}`)
    setmessagesDataOneToOne(res.data);
  
  }

   const updateGroupMessages = async () => {
    const res = await axios.get(
      `http://localhost:9090/knk/messageInGroups?guest_group=${guestGroup}`
    );
    setMessageInGroup(res.data);
   };



  function openRegisterModal() {
    setRegisterInfo("")
    
    setRegisterModal(true);
  }

  function closeRegisterModal() {
    setRegisterModal(false);
  }



  function openLoginModal() {
        setRegisterInfo("");
    setLoginModal(true);
    // setLogin(true);
  }

  function closeLoginModal() {
    setLoginModal(false);
  }

  const Logout = () => {
    setLogin(0);
    sessionStorage.removeItem("number");
    setGuest("ChatApp");
    setGuestGroup("ChatApp Groups");
    /* setMessageInGroup();
    setRecentGrps();
    setRecentMessages(); */

  }

  function openStartConversation() {
        setRegisterInfo("");
    setConvModal(true);
  }
  function closeStartCoversation() {
    setConvModal(false);
  }

  function openAddGroup() {
        setRegisterInfo("");
    setAddGrpModal(true);

  }
  function closeAddGroup() {
    setAddGrpModal(false);


  }




  const StartConversation =async () => {
    /* first we have check if the user existed with that name or not */
    
    await axios.post(
      `http://localhost:9090/knk/startConversation?number=${login}&guest=${number}`
    ).then((res) => {
      /* console.log(res.data); */
      if (res.data === 0) {
        setRegisterInfo("Check the number");
        
      }
      else {
        const RecentMessages = async () => {
          const res = await axios.get(
            `http://localhost:9090/knk/recent?number=${login}`
          );
          setRecentMessages(res.data);
        };
        RecentMessages();
        closeStartCoversation();

      }

    })
      .catch((e) => {
        console.log(e);
    })

    }



  /* console.log(login) */

  const sendMessage = async (text) => {
    /* console.log(textBoxMessage); */
    let msg=textBoxMessage.trim()
    if (msg.length !== 0) {
        await axios
          .post(
            `http://localhost:9090/knk/sendMessage?number=${login}&guest=${guest}&data=${text}`
          )
          .then((res) => {
            /* console.log(res.data); */
          })
          .catch((e) => {
            /* console.log(e); */
          });
      setTextBoxMessage("");
      


    }
    updateMessages();
   
  }

  const sendGroupMessage = async (text) => {
    let msg = textBoxMessage.trim();
    if (msg.length !== 0) {
      await axios.post(
        `http://localhost:9090/knk/sendGroupMessage?number=${login}&guest_group=${guestGroup}&data=${text}`
      )
        .then((res) => {
          /* console.log("successfull") */
        })
        .catch((e) => {
          console.log(e);
        })
    }
    updateGroupMessages();
    setTextBoxMessage("");
  }



  const AddGroup = async () => {
    /* console.log(login); */
    /* console.log(guestGroup); */
    axios.get(
      `http://localhost:9090/knk/createAGroup?number=${login}&groupName=${guestGroup}`
    ).then((res) => {
      /* console.log(res.data); */
      if (res.data === 0) {
        setRegisterInfo(res.data);
        
      }
      else {
        closeAddGroup();
        

        
      }
      
       const RecentGrps = async () => {
         const res = await axios.get(
           `http://localhost:9090/knk/recentGroups?number=${login}`
         );
         setRecentGrps(res.data);
       };
       RecentGrps();




    })
      .catch((e) => {
        console.log(e);
    })



    
    
  }
  


  function handleOnEnter(text) {
    console.log("enter", text);
    oneTwoOne ? sendMessage(text) : sendGroupMessage(text);
  }

  return (
    <MainContainer>
      {login === 0 ? (
        <div
          style={{
            flex: 11,

            /* backgroundImage: `url(${CoverPhoto})`, */
            width: "100%",
            justifyContent: "center",

            position: "static",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <HeadingDiv>
            <Heading>CHAT APP</Heading>
          </HeadingDiv>
          <CoverRegisterAndLogin>
            <CoverRegisterButton
              onClick={() => {
                openRegisterModal();
              }}
            >
              <H4white>Register</H4white>
            </CoverRegisterButton>
            <CoverLoginButton
              onClick={() => {
                openLoginModal();
              }}
            >
              <H4white>Login</H4white>
            </CoverLoginButton>
          </CoverRegisterAndLogin>
        </div>
      ) : (
        <MainBody>
          <MainLeft>
            <MainLeftHeader>
              <OneToOneDiv
                oneTwoOne={oneTwoOne}
                onClick={() => {
                  setOneTwoOne(true);
                }}
              >
                <H4white>1-1 Chats</H4white>
              </OneToOneDiv>

              <GroupsDiv
                oneTwoOne={oneTwoOne}
                onClick={() => {
                  setOneTwoOne(false);
                }}
              >
                <H4white>Group Chats</H4white>
              </GroupsDiv>
            </MainLeftHeader>

            {oneTwoOne ? (
              <SeachbarDiv
                onClick={() => {
                  openStartConversation();
                }}
              >
                <BsFillPlusCircleFill color="white"></BsFillPlusCircleFill>
                <H4white>Start New Conversation</H4white>
              </SeachbarDiv>
            ) : (
              <SeachbarDiv
                onClick={() => {
                  openAddGroup();
                }}
              >
                <BsFillPlusCircleFill color="white"></BsFillPlusCircleFill>
                <H4white>Create a group</H4white>
              </SeachbarDiv>
            )}

            {oneTwoOne ? (
              <ChatsBody>
                {recentMessages &&
                  recentMessages.map((d) => (
                    <ChatCard
                      onClick={() => {
                        onChat(d);
                      }}
                    >
                      <ChatCardProfile>
                        <Logo src={Images[d % 7]} />
                      </ChatCardProfile>
                      <ChatCardNumber>
                        <H4white>{d}</H4white>
                      </ChatCardNumber>
                    </ChatCard>
                  ))}
              </ChatsBody>
            ) : (
              <ChatsBody>
                {recentGrps.map((d) => (
                  <ChatCard
                    onClick={() => {
                      onChatGrps(d);
                    }}
                  >
                    <ChatCardProfile>
                      <Logo src={People} />
                    </ChatCardProfile>
                    <ChatCardNumber>
                      <H4white>{d}</H4white>
                    </ChatCardNumber>
                  </ChatCard>
                ))}
              </ChatsBody>
            )}
          </MainLeft>

          <MainRight>
            <MainRightHeader>
              <MainRightHeaderLeft>
                {oneTwoOne ? (
                  <Logo src={Images[guest % 7]} />
                ) : (
                  <Logo src={People} />
                )}

                <MainRightHeaderLeftName>
                  {oneTwoOne ? (
                    <H4white>{guest}</H4white>
                  ) : (
                    <H4white>{guestGroup}</H4white>
                  )}
                </MainRightHeaderLeftName>

                {oneTwoOne && <Linediv2></Linediv2>}
                {oneTwoOne && (
                  <BlockAndUnBlockContainer>
                    {blockOrNot ? (
                      <UnBlockButton
                        onClick={() => {
                          UnBlock();
                        }}
                      >
                        <H4white style={{ textDecoration: "underline" }}>
                          UnBlock
                        </H4white>
                      </UnBlockButton>
                    ) : (
                      <BlockButton
                        onClick={() => {
                          Block();
                        }}
                      >
                        <H4white style={{ textDecoration: "underline" }}>
                          Block
                        </H4white>
                      </BlockButton>
                    )}
                  </BlockAndUnBlockContainer>
                )}
              </MainRightHeaderLeft>

              <MainRightHeaderRight>
                {login !== 0 ? (
                  <ButtonsContainer>
                    {/* if logged in */}
                    <ProfileButton>
                      <Logo src={Images[login % 7]} />
                      <H4white2>{login}</H4white2>
                    </ProfileButton>
                    <Button onClick={() => Logout()}>Logout</Button>
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
                backgroundColor: "#f6f7f8",

                width: "100%",

                position: "static",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {oneTwoOne ? (
                <MsgsBody>
                  {guest !== "ChatApp" ? (
                    <MessagesAll>
                      {messagesDataOneToOne &&
                        messagesDataOneToOne.map((msg) => (
                          <div>
                            {parseInt(msg.sender_id) === login ? (
                              <RightMessage>
                                <H4white3>{msg.data}</H4white3>
                                {lastSeenId > msg.msg_id ? (
                                  <TiTick
                                    className="hoverClass"
                                    color="blue"
                                  ></TiTick>
                                ) : (
                                  <TiTick className="hoverClass"></TiTick>
                                )}
                              </RightMessage>
                            ) : (
                              <LeftMessage>
                                <H4white3>{msg.data}</H4white3>
                              </LeftMessage>
                            )}
                            <div ref={messagesEndRef} />
                          </div>
                        ))}
                    </MessagesAll>
                  ) : (
                    <LeftMessage>
                      <H4white>Welcome to one to one chat</H4white>
                    </LeftMessage>
                  )}
                </MsgsBody>
              ) : (
                <MsgsBody>
                  {guestGroup !== "ChatApp Groups" ? (
                    <MessagesAll>
                      {messagesInGroup.map((msg) => (
                        <div>
                          {parseInt(msg.sender_id) === login ? (
                            <RightMessage>
                              <H4white3>{msg.msg_data}</H4white3>
                            </RightMessage>
                          ) : (
                            <LeftMessage>
                              <H5white2 sender={msg.sender_id}>
                                {msg.sender_id}
                              </H5white2>
                              <H4white3>{msg.msg_data}</H4white3>
                            </LeftMessage>
                          )}
                        </div>
                      ))}
                    </MessagesAll>
                  ) : (
                    <LeftMessage>
                      <H4white>Welcome to Group chat</H4white>
                    </LeftMessage>
                  )}
                </MsgsBody>
              )}
            </div>

            <MsgsEditor>
              <InputEmoji
                value={textBoxMessage}
                onChange={setTextBoxMessage}
                cleanOnEnter
                onEnter={handleOnEnter}
                placeholder="Type a message"
              />
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
            <H5black>Phone Number</H5black>
          </LabelContainer>

          <ModalInputContainer>
            <ModalInput
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            ></ModalInput>
          </ModalInputContainer>

          <LabelContainer>
            <H5black>Passwrod</H5black>
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
            <H5black>Phone Number</H5black>
          </LabelContainer>
          <ModalInputContainer>
            <ModalInput
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            ></ModalInput>
          </ModalInputContainer>
          <LabelContainer>
            <H5black>Password</H5black>
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

          <FailureInfoBox>
            <FailureParagraph>{registerInfo}</FailureParagraph>
          </FailureInfoBox>
        </ModalContainer>
      </Modal>

      <Modal
        isOpen={convModal}
        onRequestClose={closeStartCoversation}
        style={customStyles}
      >
        <ModalContainer2>
          <ModalHeadingContainer>
            <H3white>Start Conversation</H3white>
          </ModalHeadingContainer>
          <LabelContainer>
            <H5black>Phone Number</H5black>
          </LabelContainer>
          <ModalInputContainer>
            <ModalInput
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            ></ModalInput>
          </ModalInputContainer>

          <ModalButttonContainer>
            <ModalButton
              onClick={() => {
                StartConversation();
              }}
            >
              Submit
            </ModalButton>
          </ModalButttonContainer>
          <FailureInfoBox>
            <FailureParagraph>{registerInfo}</FailureParagraph>
          </FailureInfoBox>
        </ModalContainer2>
      </Modal>

      <Modal
        isOpen={addGrpModal}
        onRequestClose={closeAddGroup}
        style={customStyles}
      >
        <ModalContainer2>
          <ModalHeadingContainer>
            <H3white>Create a Group</H3white>
          </ModalHeadingContainer>
          <LabelContainer>
            <H5black>Group Name</H5black>
          </LabelContainer>
          <ModalInputContainer>
            <ModalInput
              onChange={(e) => {
                setGuestGroup(e.target.value);
              }}
            ></ModalInput>
          </ModalInputContainer>

          <ModalButttonContainer>
            <ModalButton
              onClick={() => {
                AddGroup();
              }}
            >
              Submit
            </ModalButton>
          </ModalButttonContainer>
          <FailureInfoBox>
            <FailureParagraph>{registerInfo}</FailureParagraph>
          </FailureInfoBox>
        </ModalContainer2>
      </Modal>
    </MainContainer>
  );
}

export default App;
