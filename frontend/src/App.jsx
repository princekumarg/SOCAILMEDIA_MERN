import { Box, Container } from "@chakra-ui/react";
import { Navigate, Route,Routes,useLocation } from "react-router-dom";
import UserPage from './components/UserPage'
import PostPage from "./components/PostPage";
import Header from "./Pages/Header";
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";
import userAtom from "./atoms/userAtom";
import { useRecoilValue } from "recoil";
import UpdateProfile from "./components/UpdateProfile";
import CreatePost from "./components/CreatePost";
import ChatPage from "./components/ChatPage";
import { SettingsPage } from "./components/SettingsPage";
function App() {
  const user=useRecoilValue(userAtom);
  const { pathname } = useLocation();
  return (
    <Box position={"relative"} width={"full"}>
      <Container maxW={pathname === "/" ? { base: "620px", md: "900px" } : "620px"}>
      <Header/>
      <Routes>
        <Route path='/' element={user?<HomePage/>:<Navigate to='/auth'/>}/>
        <Route path='/auth' element={!user?<AuthPage/>:<Navigate to='/'/>}/>
        <Route path='/update' element={user?<UpdateProfile/>:<Navigate to='/auth'/>}/>
        <Route path='/:username' element={user?(<> <CreatePost/> <UserPage/></> 
                                                ):(<UserPage/>)}
        />
        <Route path='/:username/post/:pid' element={<PostPage/>}/>
        <Route path='/chat' element={user?<ChatPage/>:<Navigate to='/auth'/>}/>
        <Route path='/settings' element={user ? <SettingsPage /> : <Navigate to={"/auth"} />} />
      </Routes>
    </Container>
    </Box>
    
  )
}

export default App
