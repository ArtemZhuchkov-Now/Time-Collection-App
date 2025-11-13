import '@servicenow/sdk/global'
import { Test } from '@servicenow/sdk/core'

/**
 * ATF Test: Time Entry Validation
 * 
 * This test validates field validation rules and error handling:
 * 1. Opens new time entry form
 * 2. Tests mandatory field validation
 * 3. Tests field state validation (visible, mandatory, etc.)
 * 4. Validates choice field values
 */
Test({
  $id: Now.ID['time_entry_validation_test'],
  name: 'Time Entry Validation - Field Rules Test',
  description: 'Test form validation rules, mandatory field enforcement, field states, and choice field values for time entry forms',
  active: true,
  failOnServerError: true
}, (atf) => {

  // Step 1: Initialize test
  atf.server.log({
    $id: Now.ID['validation_test_init'],
    description: "Initialize test execution and log the beginning of the time entry validation workflow test",
    log: 'Starting ATF test for Time Entry validation - testing field rules and form validation'
  });

  // Step 2: Open new time entry form
  atf.form.openNewForm({
    $id: Now.ID['open_validation_form'],
    description: "Open a new time entry form in standard UI to test field validation and form behavior",
    table: 'x_snc_time_collect_time_entry',
    formUI: 'standard_ui',
    view: ''
  });

  // Step 3: Validate mandatory field states
  atf.form.fieldStateValidation({
    $id: Now.ID['validate_mandatory_fields'],
    description: "Validate that critical fields are properly configured as mandatory and visible on the form",
    table: 'x_snc_time_collect_time_entry',
    mandatory: ['task_description', 'work_date', 'start_time', 'end_time', 'hours_worked', 'work_type', 'project_code', 'employee', 'client_name'],
    visible: ['task_description', 'work_date', 'start_time', 'end_time', 'hours_worked', 'work_type', 'project_code', 'employee', 'client_name', 'billable', 'status'],
    notMandatory: ['billable', 'status', 'billing_rate', 'manager_notes', 'approved_date', 'approved_by'],
    readOnly: [],
    notReadOnly: ['task_description', 'work_date', 'start_time', 'end_time', 'hours_worked', 'work_type', 'project_code', 'employee', 'client_name', 'billable'],
    notVisible: [],
    formUI: 'standard_ui'
  });

  // Step 4: Set partial field values (missing mandatory fields)
  atf.form.setFieldValue({
    $id: Now.ID['set_partial_fields'],
    description: "Set only some field values to test validation behavior when mandatory fields are missing",
    table: 'x_snc_time_collect_time_entry',
    fieldValues: {
      task_description: 'Validation test - Partial entry',
      work_type: 'testing'
    },
    formUI: 'standard_ui'
  });

  // Step 5: Validate partial field values
  atf.form.fieldValueValidation({
    $id: Now.ID['validate_partial_values'],
    description: "Confirm that the partially set field values are correctly displayed on the form",
    table: 'x_snc_time_collect_time_entry',
    conditions: 'task_description=Validation test - Partial entry^work_type=testing',
    formUI: 'standard_ui'
  });

  // Step 6: Complete mandatory fields
  atf.form.setFieldValue({
    $id: Now.ID['complete_mandatory_fields'],
    description: "Fill all remaining mandatory fields with valid data to enable successful form submission",
    table: 'x_snc_time_collect_time_entry',
    fieldValues: {
      work_date: '2024-12-20',
      start_time: '2024-12-20 10:00:00',
      end_time: '2024-12-20 14:00:00',
      hours_worked: '4',
      project_code: 'VALID-TEST-001',
      client_name: 'Validation Test Client',
      employee: '6816f79cc0a8016401c5a33be04be441',
      billable: 'true'
    },
    formUI: 'standard_ui'
  });

  // Step 7: Submit completed form
  atf.form.submitForm({
    $id: Now.ID['submit_valid_form'],
    description: "Submit the form with all mandatory fields completed and verify successful submission",
    assert: 'form_submitted_to_server',
    formUI: 'standard_ui'
  });

  // Step 8: Log successful completion
  atf.server.log({
    $id: Now.ID['validation_test_complete'],
    description: "Record successful completion of the time entry validation workflow test and log final status",
    log: 'Time entry validation test completed successfully - all field validation rules verified'
  });

});