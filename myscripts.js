// JavaScript Document
var $ = function (id) {
    'use strict';
    return document.getElementById(id);
}
var demo = function () {
    'use strict';
    var display = "Once upon a midnight dreary, while I pondered, weak and weary,  \n" +
        "Over many a quaint and curious volume of forgotten lore— \n" +
        "\tWhile I nodded, nearly napping, suddenly there came a tapping,\n" +
        "As of some one gently rapping, rapping at my chamber door. \n" +
        "\"\'Tis some visitor,\" I muttered, “tapping at my chamber door— \n" +
        "\tOnly this and nothing more.\"\n\n" +
        "Ah, distinctly I remember it was in the bleak December;\n" +
        "And each separate dying ember wrought its ghost upon the floor.\n" +
        "\tEagerly I wished the morrow;—vainly I had sought to borrow \n" +
        "\tFrom my books surcease of sorrow—sorrow for the lost Lenore— \n" +
        "For the rare and radiant maiden whom the angels name Lenore— \n" +
        "\tNameless here for evermore. \n\n" +
        " And the silken, sad, uncertain rustling of each purple curtain \n" +
        "Thrilled me—filled me with fantastic terrors never felt before; \n" +
        "\tSo that now, to still the beating of my heart, I stood repeating \n" +
        "\"\'Tis some visitor entreating entrance at my chamber door— \n" +
        "Some late visitor entreating entrance at my chamber door;— \n" +
        "\tThis it is and nothing more.\" \n\n" +
        "Presently my soul grew stronger; hesitating then no longer, \n" +
        "\"Sir,\" said I, \"or Madam, truly your forgiveness I implore; \n" +
        "\tBut the fact is I was napping, and so gently you came rapping, \n" +
        "\tAnd so faintly you came tapping, tapping at my chamber door, \n" +
        "That I scarce was sure I heard you\"—here I opened wide the door;— \n" +
        "\tDarkness there and nothing more. \n\n" +
        "Deep into that darkness peering, long I stood there wondering, fearing, \n" +
        "Doubting, dreaming dreams no mortal ever dared to dream before; \n" +
        "\tBut the silence was unbroken, and the stillness gave no token, \n" +
        "\tAnd the only word there spoken was the whispered word, \"Lenore ? \"\n" +
        "This I whispered, and an echo murmured back the word, \"Lenore!\"— \n" +
        "\tMerely this and nothing more. \n\n\n" +
        "\\\\Want to read more? Please visit: www.poetryfoundation.org/poems-and-poets/poems/detail/48860 ";



    $("display").value = display;

}

window.onload = function () {
    'use strict';
    $("demo").onclick = demo;
}