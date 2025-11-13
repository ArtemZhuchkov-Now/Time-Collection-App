import '@servicenow/sdk/global'
import { Test } from '@servicenow/sdk/core'

export const timeEntryFormTest = Test({
    $id: Now.ID['time_entry_form_test'],
    name: 'Create Time Entry - Form Workflow',
    description: 'Test the complete workflow of creating a time entry through the form interface, including field validation and data persistence',
    active: true,
    failOnServerError: true
}, (atf) => {
    // Step 1: Initialize test execution and log the beginning
    atf.server.log({
        $id: Now.ID['initialize_test'],
        description: 'Initialize test execution and log the beginning of the time entry form workflow test',
        log: 'Starting ATF test for Time Entry form workflow - validating end-to-end functionality including form opening, data entry, submission, and validation'
    });

    // Step 2: Navigate to and open a new time entry form
    atf.form.openNewForm({
        $id: Now.ID['open_new_form'],
        description: 'Navigate to and open a new time entry form in the standard ServiceNow user interface',
        table: 'x_snc_time_collect_time_entry',
        formUI: 'standard_ui',
        view: ''
    });

    // Step 3: Populate all mandatory fields with comprehensive test data
    atf.form.setFieldValue({
        $id: Now.ID['set_field_values'],
        description: 'Populate all mandatory fields on the time entry form with comprehensive test data including work details, dates, times, and billing information',
        table: 'x_snc_time_collect_time_entry',
        fieldValues: {
            task_description: 'ATF Test - Software development and testing activities for automated test framework validation',
            work_date: '2024-12-20',
            start_time: '2024-12-20 09:00:00',
            end_time: '2024-12-20 17:00:00',
            hours_worked: '8.0',
            work_type: 'development',
            project_code: 'TEST-2024-001',
            client_name: 'ATF Testing Client',
            employee: '6816f79cc0a8016401c5a33be04be441', // System Administrator sys_id
            billable: 'true'
        },
        formUI: 'standard_ui'
    });

    // Step 4: Submit the completed form and verify successful submission
    const submissionResult = atf.form.submitForm({
        $id: Now.ID['submit_form'],
        description: 'Submit the completed time entry form to the server and verify successful submission, capturing the new record ID for further validation',
        assert: 'form_submitted_to_server',
        formUI: 'standard_ui'
    });

    // Step 5: Perform server-side validation to confirm record creation
    atf.server.recordValidation({
        $id: Now.ID['validate_server_record'],
        description: 'Perform server-side validation to confirm the time entry record was successfully created with the correct task description and project code',
        table: 'x_snc_time_collect_time_entry',
        recordId: submissionResult.record_id,
        fieldValues: 'task_descriptionCONTAINSATF Test^project_code=TEST-2024-001',
        assert: 'record_validated',
        enforceSecurity: false
    });

    // Step 6: Open the newly created record to verify accessibility
    atf.form.openExistingRecord({
        $id: Now.ID['open_created_record'],
        description: 'Open the newly created time entry record to verify it can be accessed and displayed properly in the form interface',
        table: 'x_snc_time_collect_time_entry',
        recordId: submissionResult.record_id,
        formUI: 'standard_ui',
        view: '',
        selectedTabIndex: 1
    });

    // Step 7: Validate that critical field values are correctly displayed
    atf.form.fieldValueValidation({
        $id: Now.ID['validate_field_values'],
        description: 'Validate that critical field values (work type, hours worked, and billable status) are correctly displayed and match the submitted data',
        table: 'x_snc_time_collect_time_entry',
        conditions: 'work_type=development^hours_worked=8.0^billable=true',
        formUI: 'standard_ui'
    });

    // Step 8: Record the successful completion of the test workflow
    atf.server.log({
        $id: Now.ID['log_completion'],
        description: 'Record the successful completion of the time entry form workflow test and log final status with comprehensive summary',
        log: 'ATF test completed successfully - Time Entry form workflow validated end-to-end. All form operations, data persistence, and field validations passed.'
    });
})