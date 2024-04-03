import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/gabrieltrabalon.png"
                alt="Foto do usuário"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Gabriel Trabalon</strong>
                </div>
            </Profile>


            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}