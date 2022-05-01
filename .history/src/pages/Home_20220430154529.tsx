import illustrationImg from '../assets/images/illustration.svg'

import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// import { firebase, auth, app } from '../services/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { useAuth } from '../hooks/useAuth';
import '../services/firebase';

import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss';
import { Button } from '../components/Button';

export function Home() {

    const navigate = useNavigate();

    function handleCreateRoom() {


        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        // console.log(auth, provider);

        signInWithPopup(auth, provider)
            .then((result) => {
                console.log('dedfsfasf');
                console.log(result);
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                console.log(token);
                console.log(credential);
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                // navigate('/rooms/new');
            });
    }




    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua conta com o Google
                    </button>
                    <div className="separator" >Ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />


                    </form>
                    <Button type="submit" onClick={handleCreateRoom}>
                        Entrar na sala
                    </Button>
                </div>
            </main >
        </div>


    )
}