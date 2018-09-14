exports.isMentionValid = function(mention) {
    const leftMostIndex = mention.search('<');
    const rightMostIndex = mention.search('>');
    if(leftMostIndex == 0 && rightMostIndex == mention.length - 1) {
        return true;
    }

    return false;
};
