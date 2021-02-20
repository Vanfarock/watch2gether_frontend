import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkToRoom = styled(Link)`
    text-decoration: none;
    color: ${props => props.disabled ? props.theme.disabledFontColor
                                     : props.theme.fontColor};
    pointer-events: ${props => props.disabled ? 'none'
                                              : 'auto'};
`;