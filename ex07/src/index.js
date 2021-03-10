function main() {
    // Variable declarations 
    var studyCapVar;
    var properCamelCase;
    var titleCaseOver;

    // Variable assignments
    studyCapVar = 10;
    properCamelCase = "A String";
    titleCaseOver = 9000;

    return {
        studyCapVar,
        properCamelCase,
        titleCaseOver
    }
}

console.log (main());

module.exports = main;