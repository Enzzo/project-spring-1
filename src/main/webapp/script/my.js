function delete_task(task_id){
    let url = "/" + task_id;
    console.log(url);
    $.ajax({
        url: url,
        type: 'DELETE',
        async: false,
        success: function(){
            window.location.reload();
        }
    });
}

function edit_task(task_id){
    let identifier_delete = "#delete_" + task_id;
    $(identifier_delete).remove();

    let identifier_edit = "#edit_" + task_id;
    let save_tag = "<button id='save_" + task_id + "'>Save</button>";
    $(identifier_edit).html(save_tag);
    let property_save_tag = "update_task(" + task_id + ")";
    $(identifier_edit).attr("onclick", property_save_tag);

    let current_tr_element = $(identifier_edit).parent().parent();
    let children = current_tr_element.children();
    let td_description = children[1];
    td_description.innerHTML = "<input id='input_description_" + task_id + "' type='text' value'" + td_description.innerHTML + "'>";

    let td_status = children[2];
    let status_id = "#select_status_" + task_id;
    let status_current_value = td_status.innerHTML;
    td_status.innerHTML = getDropdownStatusHtml(task_id);
    $(status_id).val(status_current_value).change();
}