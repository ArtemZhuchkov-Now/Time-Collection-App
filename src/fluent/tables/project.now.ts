import '@servicenow/sdk/global'
import { Table, StringColumn, DateColumn, DecimalColumn, ReferenceColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_snc_time_collect_project = Table({
    name: 'x_snc_time_collect_project',
    label: 'Project',
    schema: {
        project_code: StringColumn({ 
            label: 'Project Code', 
            maxLength: 50,
            mandatory: true
        }),
        project_name: StringColumn({ 
            label: 'Project Name', 
            maxLength: 200,
            mandatory: true
        }),
        client_name: StringColumn({ 
            label: 'Client Name', 
            maxLength: 100,
            mandatory: true
        }),
        project_manager: ReferenceColumn({ 
            label: 'Project Manager', 
            referenceTable: 'sys_user',
            mandatory: true
        }),
        start_date: DateColumn({ 
            label: 'Start Date',
            mandatory: true
        }),
        end_date: DateColumn({ 
            label: 'End Date'
        }),
        budget_hours: DecimalColumn({ 
            label: 'Budget Hours',
            default: '0.00'
        }),
        budget_amount: DecimalColumn({ 
            label: 'Budget Amount ($)',
            default: '0.00'
        }),
        status: StringColumn({
            label: 'Project Status',
            choices: {
                planning: { label: 'Planning', sequence: 0 },
                active: { label: 'Active', sequence: 1 },
                on_hold: { label: 'On Hold', sequence: 2 },
                completed: { label: 'Completed', sequence: 3 },
                cancelled: { label: 'Cancelled', sequence: 4 }
            },
            dropdown: 'dropdown_with_none',
            default: 'planning'
        }),
        priority: StringColumn({
            label: 'Priority',
            choices: {
                low: { label: 'Low', sequence: 0 },
                medium: { label: 'Medium', sequence: 1 },
                high: { label: 'High', sequence: 2 },
                critical: { label: 'Critical', sequence: 3 }
            },
            dropdown: 'dropdown_with_none',
            default: 'medium'
        }),
        description: StringColumn({ 
            label: 'Project Description', 
            maxLength: 1000
        }),
        billing_type: StringColumn({
            label: 'Billing Type',
            choices: {
                hourly: { label: 'Hourly', sequence: 0 },
                fixed_price: { label: 'Fixed Price', sequence: 1 },
                time_and_materials: { label: 'Time & Materials', sequence: 2 },
                retainer: { label: 'Retainer', sequence: 3 }
            },
            dropdown: 'dropdown_with_none',
            default: 'hourly'
        }),
        active: BooleanColumn({ 
            label: 'Active',
            default: true
        })
    },
    actions: ['create', 'read', 'update', 'delete'],
    display: 'project_name',
    accessible_from: 'public',
    allow_web_service_access: true,
    extensible: true,
    audit: true
})