// // a faire pour "optimiser", retirer les data-id en trop et les mettres dans le conteneur
// let categories = []

// let totalBudget = 0

// $(document).ready(function () {
//     let newCategory = {
//         label: '',
//         budgetPlanned: 0,
//         budgetSpended: 0
//     }

//     categories.push(newCategory)

//     $('.add').click(function (e) {
//         let newCategory = {
//             label: '',
//             budgetPlanned: 0,
//             budgetSpended: 0
//         }

//         // Ajout dans le tableau
//         categories.push(newCategory)

//         // Affichage de la nouvelle barre de progression
//         addGauge(newCategory)
//     })

//     $('.remove').click(function (id) {
//         console.log(this)
//         remove($(this).data('[data-id="'+id +'"]'))
//         // $('[data-id="'+id +'].addCategory ').remove()

//         // $('[data-id="'+id +'] #gauges ').remove()
    
//     })

//     $('[data-id="0"] .label').on('keyup', function() {
//         let id = $(this).data('id')
//         $("[data-id='0'] label").text($(this).val())
//     })

//     $('[data-id="0"] .budgetPlanned').on('keyup', function() {
//         computeBudget(0)
//     })
// })

// /**
//  * Ajout de la progress bar
//  * @param category : int
//  */
// function addGauge(category) {
//     let id = categories.length - 1
//     $('.addCategory').append('<div class="input-group mb-3" data-id="'+id +'"><input type="text" class="form-control label">' +
//         '<input type="number" class="form-control budgetPlanned" placeholder="Budget Prévu">' +
//         '<input type="number" class="form-control budgetSpended" min="0" placeholder="Budget Dépensé"><input type="button" value="Ajouter la dépense" data-id="'+id+'" onclick="moveBarre()">' +
//         '</div><div class="input-group mb-3"><button type="button" data-id="'+id +'" class="btn btn-danger remove">-</button></div>')

//     $('#gauges').append('<div data-id="'+id +'"><label data-id="'+id +'">'+ category.label +'</label><div class="progress mt-2">' +

//         '<div class="progress-bar" data-id="'+id +'" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">' +
//         '</div></div></div>')

//    setFields(id)
// }

// /**
//  * Supprime une catégorie de la liste
//  * @param category : int
//  */
// function removeCategory(category) {
//      let id = categories.length - 1
//     $('.addCategory [data-id="'+id +']').remove()

//     $('#gauges [data-id="'+id +']').remove()

//    setFields(id)// Retirer une catégorie en ciblant par le data id
// }


// /**
//  * Configuration des champs à actualiser
//  * @param id
//  */
// function setFields(id) {
//     $('[data-id="' + id +'"] .label').on('keyup', function() {
//         $('[data-id="' + id +'"] label').text($(this).val())
//     })

//     $('[data-id="'+ id +'"] .budgetPlanned').on('keyup', function() {
//         computeBudget(id)
//     })

//     // @todo gérer le champ budgetSpended
// }

// /**
//  * Calcule les données d'une catégorie
//  * @param category
//  */
// function computeBudget(category) {
//     // Calculer en fonction de la paie et de la catégorie
//     categories[category].budgetPlanned = $('[data-id="' + category + '"] .budgetPlanned').val()
//     console.log(category)
//     console.log(categories)
// }


// /**
//  * Affiche un message s'il y a eu dépasseement sur le prévisionnel
//  * @param category
//  */
// function displayOverUsed(category) {

// }


// // function moveBarre(id){
// //     $(document).ready(function(){
// //         $(".mygetbtn").on("click", function(){
// //             var dataId = $(this).attr("data-id");
// //             alert("The data-id of clicked item is: " + dataId);
// //         });
        
// //     // let result = $(this).data('[data-id="'+ id +'"].budgetPlanned');
// //     $('[data-id="'+ dataId +'".progress-bar').css("width", '500px');
// //     // console.log(result);
// //     });
// // //     $(document).ready(function(id){ 
// // //         $('[data-id="'+ id +'"] .mygetbtn').click(function(){
// // //             var mygetvalue = $('[data-id="'+ id +'"] .budgetPlanned').val();
// // //             alert(mygetvalue);
// // //         });
// // //     });
// // }

    // a faire pour "optimiser", retirer les data-id en trop et les mettres dans le conteneur
let categories = [];

let totalBudget = 0;

$(document).ready(function () {
    let newCategory = {
        label: '',
        budgetPlanned: 0,
        budgetSpended: 0
    }

    categories.push(newCategory)

    $('.add').click(function (e) {
        let newCategory = {
            label: '',
            budgetPlanned: 0,
            budgetSpended: 0
        }

        // Ajout dans le tableau
        categories.push(newCategory)

        // Affichage de la nouvelle barre de progression
        addGauge(newCategory)
    })

    $('.remove').click(function () {
        console.log(this)
        var dataId = $(this).data('id')
        $("div[data-id='" + dataId + "']").remove();
    })

    $('[data-id="0"] .label').on('keyup', function() {
        let id = $(this).data('id')
        $("[data-id='0'] label").text($(this).val())
    })

    $('[data-id="0"] .budgetPlanned').on('keyup', function() {
        computeBudget(0)
    })
})

/**
 * Ajout de la progress bar
 * @param category : int
 */
function addGauge(category) {
    let id = categories.length - 1
    $('.addCategory').append('<div class="zut"><div class="input-group mb-3" data-id="'+id +'"><input type="text" class="form-control label">' +
        '<input type="number" class="form-control budgetPlanned" placeholder="Budget Prévu">' +
        '<input type="number" class="form-control budgetSpended" min="0" placeholder="Budget Dépensé"><input type="button" value="Ajouter la dépense" data-id="0" class="mygetbtn" onclick="moveBarre()">' +
        '</div><div class="input-group mb-3"><button type="button" data-id="'+id +'" class="btn btn-danger remove" onclick="removeCategory('+id+')">-</button></div></div>')

    $('#gauges').append('<div class="flute" data-id="'+id +'"><label data-id="'+id +'">'+ category.label +'</label><div class="progress mt-2">' +

        '<div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">' +
        '</div></div></div>')

   setFields(id)
}

/**
 * Supprime une catégorie de la liste
 * @param category : int
 */
function removeCategory(category) {
    let id = categories.length ;
    let index = category;
    let tab=[];
    tab.push(category);
    
    // Retirer une catégorie en ciblant par le data id
    
    for ( i = 0; i < tab.length; i++) {
         document.querySelectorAll('.zut')[index-1].remove();
        document.querySelectorAll('.flute')[index-1].remove();
        
    }
    id = categories.length ;
}


/**
 * Configuration des champs à actualiser
 * @param id
 */
function setFields(id) {
    $('[data-id="' + id +'"] .label').on('keyup', function() {
        $('[data-id="' + id +'"] label').text($(this).val())
    })

    $('[data-id="'+ id +'"] .budgetPlanned').on('keyup', function() {
        computeBudget(id)
    })

    // @todo gérer le champ budgetSpended
}

/**
 * Calcule les données d'une catégorie
 * @param category
 */
function computeBudget(category) {
    // Calculer en fonction de la paie et de la catégorie
    categories[category].budgetPlanned = $('[data-id="' + category + '"] .budgetPlanned').val()
    console.log(category)
    console.log(categories)
}


/**
 * Affiche un message s'il y a eu dépasseement sur le prévisionnel
 * @param category
 */
function displayOverUsed(category) {

}
