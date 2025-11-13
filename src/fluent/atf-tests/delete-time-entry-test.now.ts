import '@servicenow/sdk/global'
import { Test } from '@servicenow/sdk/core'

/**
 * ATF Test: Delete Time Entry
 * 
 * This test validates the ability to delete time entries:
 * 1. Creates a new time entry via server
 * 2. Validates the record exists
 * 3. Deletes the record via server operation
 * 4. Confirms the record no longer exists
 */
Test({
  $id: Now.ID['delete_time_entry_test'],
  name: 'Delete Time Entry - Removal Workflow',
  description: 'Create a time entry record, validate its existence, delete it, and confirm successful removal from the system',
  active: true,
  failOnServerError: true
}, (atf) => {

  // Step 1: Initialize test
  atf.server.log({
    $id: Now.ID['delete_test_init'],
    description: "Initialize test execution and log the beginning of the time entry deletion workflow test",
    log: 'Starting ATF test for Time Entry deletion workflow - validating record removal functionality'
  });

  // Step 2: Create time entry to be deleted
  const recordToDelete = atf.server.recordInsert({
    $id: Now.ID['create_record_for_deletion'],
    description: "Create a new time entry record with test data that will be deleted to validate removal functionality",
    table: 'x_snc_time_collect_time_entry',
    fieldValues: {
      task_description: 'Temporary entry - Will be deleted in test',
      work_date: '2024-12-20',
      start_time: '2024-12-20 14:00:00',
      end_time: '2024-12-20 16:00:00',
      hours_worked: '2',
      work_type: 'administrative',
      project_code: 'DELETE-TEST-001',
      client_name: 'Delete Test Client',
      employee: '6816f79cc0a8016401c5a33be04be441',
      billable: 'false',
      status: 'draft'
    },
    assert: 'record_successfully_inserted',
    enforceSecurity: false
  });

  // Step 3: Validate record exists before deletion
  atf.server.recordValidation({
    $id: Now.ID['validate_before_delete'],
    description: "Confirm the time entry record exists in the database before attempting deletion",
    table: 'x_snc_time_collect_time_entry',
    recordId: recordToDelete.record_id,
    fieldValues: 'task_description=Temporary entry - Will be deleted in test',
    assert: 'record_validated',
    enforceSecurity: false
  });

  // Step 4: Delete the record
  atf.server.recordDelete({
    $id: Now.ID['delete_record'],
    description: "Delete the time entry record from the database and verify successful removal",
    table: 'x_snc_time_collect_time_entry',
    recordId: recordToDelete.record_id,
    assert: 'record_successfully_deleted',
    enforceSecurity: false
  });

  // Step 5: Confirm record no longer exists
  atf.server.recordValidation({
    $id: Now.ID['validate_after_delete'],
    description: "Verify the time entry record no longer exists in the database after deletion",
    table: 'x_snc_time_collect_time_entry',
    recordId: recordToDelete.record_id,
    fieldValues: '',
    assert: 'record_not_found',
    enforceSecurity: false
  });

  // Step 6: Log successful completion
  atf.server.log({
    $id: Now.ID['delete_test_complete'],
    description: "Record successful completion of the time entry deletion workflow test and log final status",
    log: 'Time entry deletion test completed successfully - record removal confirmed'
  });

});