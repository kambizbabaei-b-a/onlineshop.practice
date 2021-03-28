var sTH = function (str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body.firstChild;
};


const cat_1 = sTH('<div class="col-4 no-padding" id="cat-item-1"><img src="./res/img/laptops.jpg" alt="" class="fit-content" /></div>');
const cat_2 = sTH('<div class="col-4 no-padding"id="cat-item-2"><img src="./res/img/home_bedding.jpg"alt=""class="fit-content"/></div>');
const cat_3 = sTH('<div class="col-4 no-padding" id="cat-item-3" > <img src="./res/img/strip_lighting.jpg" alt="" class="fit-content"/></div>');
const cat_4 = sTH('<div class="col-3"><img src="./res/img/groceries.jpg" alt="" class="fit-content" /></div>');
const cat_section = document.getElementById("category-section");
cat_section.appendChild(cat_1);
cat_section.appendChild(cat_2);
cat_section.appendChild(cat_3);
var cat = document.getElementById("category-section");

function cat_next_onclick() {
    function removeChilds() {
        for (i = 0; i < cat.childNodes.length; i++) {
            cat.removeChild(cat.firstChild)
        }
    }

    switch (cat.firstElementChild) {
        case cat_1:
            removeChilds()
            cat.appendChild(cat_2);
            cat.appendChild(cat_3);
            cat.appendChild(cat_4);

            break;
        case cat_2:
            removeChilds()
            cat.appendChild(cat_3);
            cat.appendChild(cat_4);
            cat.appendChild(cat_1);


            break;
        case cat_3:
            removeChilds()
            cat.appendChild(cat_4);
            cat.appendChild(cat_1);
            cat.appendChild(cat_2);


            break;
        case cat_4:
            removeChilds()
            cat.appendChild(cat_1);
            cat.appendChild(cat_2);
            cat.appendChild(cat_3);
            break;
        default:
            break;
    };
};
const cat_btn_next = document.getElementById("category-next")
cat_btn_next.onclick = cat_next_onclick;