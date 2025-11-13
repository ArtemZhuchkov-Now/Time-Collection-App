import '@servicenow/sdk/global'
import { Test } from '@servicenow/sdk/core'

/**
 * ATF Test: Edit Time Entry
 * 
 * This test validates the ability to edit an existing time entry:
 * 1. Creates a new time entry via server
 * 2. Opens the created record in form UI
 * 3. Modifies key fields (hours, work type, description)
 * 4. Submits the updated form
 * 5. Validates changes were persisted correctly
 */
Test({
  $id: Now.ID['edit_time_entry_test'],
  name: 'Edit Time Entry - Update Workflow',
  description: 'Create a time entry, open it for editing, modify fields, submit changes, and validate the updates were saved correctly',
  active: true,
  failOnServerError: true
}, (atf) => {

  // Step 1: Initialize test
  atf.server.log({
    $id: Now.ID['edit_test_init'],
    description: "Initialize test execution and log the beginning of the time entry edit workflow test",
    log: 'Starting ATF test for Time Entry edit workflow - validating record modification and persistence'
  });

  // Step 2: Create initial time entry record
  const initialRecord = atf.server.recordInsert({
    $id: Now.ID['create_initial_record'],
    description: "Create a new time entry record with initial test data to be modified later in the test",
    table: 'x_snc_time_collect_time_entry',
    fieldValues: {
      task_description: 'Initial task - Software development for testing',
      work_date: '2024-12-20',
      start_time: '2024-12-20 09:00:00',
      end_time: '2024-12-20 12:00:00',
      hours_worked: '3',
      work_type: 'development',
      project_code: 'EDIT-TEST-001',
      client_name: 'Edit Test Client',
      employee: '6816f79cc0a8016401c5a33be04be441',
      billable: 'true',
      status: 'draft'
    },
    assert: 'record_successfully_inserted',
    enforceSecurity: false
  });

  // Step 3: Open the created record for editing
  atf.form.openExistingRecord({
    $id: Now.ID['open_for_editing'],
    description: "Open the newly created time entry record in form interface to enable field modifications",
    table: 'x_snc_time_collect_time_entry',
    recordId: initialRecord.record_id,
    formUI: 'standard_ui',
    view: ''
  });

  // Step 4: Update key fields with new values
  atf.form.setFieldValue({
    $id: Now.ID['update_fields'],
    description: "Modify critical fields including hours worked, work type, and task description to test update functionality",
    table: 'x_snc_time_collect_time_entry',
    fieldValues: {
      task_description: 'Updated task - Code review and optimization',
      hours_worked: '4.5',
      work_type: 'analysis',
      billable: 'false'
    },
    formUI: 'standard_ui'
  });

  // Step 5: Submit the updated form
  atf.form.submitForm({
    $id: Now.ID['submit_updates'],
    description: "Submit the form with updated field values and verify successful form submission to server",
    assert: 'form_submitted_to_server',
    formUI: 'standard_ui'
  });

  // Step 6: Validate the changes were persisted
  atf.server.recordValidation({
    $id: Now.ID['validate_updates'],
    description: "Perform server-side validation to confirm all field updates were correctly saved to the database",
    table: 'x_snc_time_collect_time_entry',
    recordId: initialRecord.record_id,
    fieldValues: 'task_description=Updated task - Code review and optimization^hours_worked=4.5^work_type=analysis^billable=false',
    assert: 'record_validated',
    enforceSecurity: false
  });

  // Step 7: Log successful completion
  atf.server.log({
    $id: Now.ID['edit_test_complete'],
    description: "Record successful completion of the time entry edit workflow test and log final status",
    log: 'Time entry edit test completed successfully - all field updates verified'
  });

});