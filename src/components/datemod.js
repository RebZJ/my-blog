import React from "react";
import Moment from 'react-moment';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import moment from "moment";

export function datemod(thisdate) {
    const dateparsed = <div ><p><AccessTimeIcon style={{position:"relative", bottom:"2px"}}></AccessTimeIcon>&nbsp;<Moment format="Do MMMM YYYY">
        {thisdate}
    </Moment></p></div>;
    return dateparsed;
}
