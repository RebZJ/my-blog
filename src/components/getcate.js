import React from 'react';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

export function getcate(categories) {
    var array = [];
    var string = "";
    for (var prop in categories) {
        array.push(categories[prop].name);
    }
    for (let index = 0; index < array.length; index++) {
        if (index < (array.length - 1)) {
            string = string + array[index] + ", ";
        }
        else {
            string = string + array[index];
        }
    }
    return <p><LibraryBooksIcon>}></LibraryBooksIcon>&nbsp;{string}</p>;
}
