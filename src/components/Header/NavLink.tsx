import Link from 'next/link';
import {NavLinkContainer} from './styles';
import {useRouter} from 'next/router';
import { FaLessThanEqual } from 'react-icons/fa';

interface Props {
    title: string;
    path: string;
    includes?: boolean;
}


export default function NavLink({title, path, includes = false}: Props) {
    const router = useRouter();

    function verifyIfIsActive() {
        if(includes) {
            return router.pathname.includes(path);
        }
        return router.pathname === path;
    }
    
    const isActive = verifyIfIsActive();
    return (
        <NavLinkContainer isActive={isActive}>
            <Link href={path}>
            <a>{title}</a>
            </Link>
        </NavLinkContainer>
    )
};
