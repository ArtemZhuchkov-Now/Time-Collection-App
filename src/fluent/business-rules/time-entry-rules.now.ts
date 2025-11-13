import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { calculateHours, validateWorkDate, setDefaultEmployee } from '../../server/time-entry-utils.js'

BusinessRule({
    $id: Now.ID['time_entry_calculate_hours'],
    name: 'Calculate Hours on Time Entry',
    table: 'x_snc_time_collect_time_entry',
    when: 'before',
    action: ['insert', 'update'],
    script: calculateHours,
    order: 100,
    active: true,
    description: 'Automatically calculates hours worked based on start and end times'
})

BusinessRule({
    $id: Now.ID['time_entry_validate_date'],
    name: 'Validate Work Date',
    table: 'x_snc_time_collect_time_entry',
    when: 'before',
    action: ['insert', 'update'],
    script: validateWorkDate,
    order: 110,
    active: true,
    description: 'Validates that work date is reasonable (not future, not too old)'
})

BusinessRule({
    $id: Now.ID['time_entry_set_employee'],
    name: 'Set Default Employee',
    table: 'x_snc_time_collect_time_entry',
    when: 'before',
    action: ['insert'],
    script: setDefaultEmployee,
    order: 90,
    active: true,
    description: 'Sets employee to current user if not specified'
})