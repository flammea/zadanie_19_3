//Add comment
const ADDCOMMENT = 'ADD_COMMENT';

//1
function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}
//2 
dispatch(addComment('nowy komentarz!'));

//3
const boundAddComment = text => dispatch(addComment(text));

boundAddComment('nowy komentarz!');
boundAddComment('kolejny nowy komentarz!');

//Edit comment
const EDIT_COMMENT = 'EDIT_COMMENT';


//1
function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}
//2
dispatch(editComment('edytowany komentarz!'));

//3

const boundEditComment = (text, id) => dispatch(editComment(text, id));

boundEditComment('edytowany komentarz');
boundEditComment('kolejny edytowany komentarz!');

//Remove comment
const REMOVE_COMMENT = 'REMOVE_COMMENT';

//1
function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}
//2
dispatch(removeComment('20'));

//3

const boundRemoveComment = id => dispatch(removeComment(id));

boundRemoveComment('20');
boundRemoveComment('21');

//Thumb up +1
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

//1
function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
}
//2
dispatch(thumbUpComment('20'));

//3

const boundThumbUpComment = id => dispatch(thumbUpComment(id));

boundThumbUpComment('20');
boundThumbUpComment('21');



//Thumb down -1
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

//1
function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}
//2
dispatch(thumbUpComment('20'));
dispatch(thumbUpComment('21'));

//3

const boundThumbDownComment = id => dispatch(thumbDownComment(id));

boundThumbDownCommentComment('20');
boundThumbDownCommentComment('21');

