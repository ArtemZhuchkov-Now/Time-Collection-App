import '@servicenow/sdk/global'
import { Table, StringColumn, DateColumn, DateTimeColumn, DecimalColumn, ReferenceColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_snc_time_collect_time_entry = Table({
    name: 'x_snc_time_collect_time_entry',
    label: 'Time Entry',
    schema: {
        employee: ReferenceColumn({ 
            label: 'Employee', 
            referenceTable: 'sys_user',
            mandatory: true
        }),
        project_code: StringColumn({ 
            label: 'Project Code', 
            maxLength: 50,
            mandatory: true
        }),
        client_name: StringColumn({ 
            label: 'Client Name', 
            maxLength: 100,
            mandatory: true
        }),
        task_description: StringColumn({ 
            label: 'Task Description', 
            maxLength: 255,
            mandatory: true
        }),
        work_date: DateColumn({ 
            label: 'Work Date',
            mandatory: true
        }),
        start_time: DateTimeColumn({ 
            label: 'Start Time',
            mandatory: true
        }),
        end_time: DateTimeColumn({ 
            label: 'End Time',
            mandatory: true
        }),
        hours_worked: DecimalColumn({ 
            label: 'Hours Worked',
            mandatory: true
        }),
        billing_rate: DecimalColumn({ 
            label: 'Billing Rate ($/hour)',
            default: '0.00'
        }),
        work_type: StringColumn({
            label: 'Work Type',
            choices: {
                design: { label: 'Design', sequence: 0 },
                analysis: { label: 'Analysis', sequence: 1 },
                consultation: { label: 'Consultation', sequence: 2 },
                field_work: { label: 'Field Work', sequence: 3 },
                documentation: { label: 'Documentation', sequence: 4 },
                meeting: { label: 'Meeting', sequence: 5 },
                travel: { label: 'Travel', sequence: 6 },
                administrative: { label: 'Administrative', sequence: 7 }
            },
            dropdown: 'dropdown_with_none',
            mandatory: true
        }),
        billable: BooleanColumn({ 
            label: 'Billable',
            default: true
        }),
        status: StringColumn({
            label: 'Status',
            choices: {
                draft: { label: 'Draft', sequence: 0 },
                submitted: { label: 'Submitted', sequence: 1 },
                approved: { label: 'Approved', sequence: 2 },
                rejected: { label: 'Rejected', sequence: 3 },
                invoiced: { label: 'Invoiced', sequence: 4 }
            },
            dropdown: 'dropdown_with_none',
            default: 'draft'
        }),
        manager_notes: StringColumn({ 
            label: 'Manager Notes', 
            maxLength: 500
        }),
        approved_by: ReferenceColumn({ 
            label: 'Approved By', 
            referenceTable: 'sys_user'
        }),
        approved_date: DateTimeColumn({ 
            label: 'Approved Date'
        })
    },
    actions: ['create', 'read', 'update', 'delete'],
    display: 'task_description',
    accessible_from: 'public',
    allow_web_service_access: true,
    extensible: true,
    audit: true
})