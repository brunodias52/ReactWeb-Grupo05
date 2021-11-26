import React from 'react';

import {Submit} from './style';

function BotaoPrimario(props) {
    return(
        <Submit type="submit">{props.children}</Submit>
    )
}

export default BotaoPrimario;