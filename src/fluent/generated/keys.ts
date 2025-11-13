import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'eb315cc198e746d9b52d472456334ddd'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'b521719fca0840c9ba20b4066cca3f17'
                    }
                    'src_server_time-entry-utils_js': {
                        table: 'sys_module'
                        id: 'e25a82c9d2b34879a06823979c944652'
                    }
                    time_entry_calculate_hours: {
                        table: 'sys_script'
                        id: '87bfbf70f14e43b0accbaed4593a82c1'
                    }
                    time_entry_set_employee: {
                        table: 'sys_script'
                        id: '9e2f6406b89f407ca5ffb9a2c8542c78'
                    }
                    time_entry_validate_date: {
                        table: 'sys_script'
                        id: 'd715795a45cd4c73a892b07a9b9dc8cb'
                    }
                    'time-collection-app': {
                        table: 'sys_ui_page'
                        id: '508e625ae1bf481798845116992a1485'
                    }
                    'x_snc_time_collect/Analytics-BHpd-zHl': {
                        table: 'sys_ux_lib_asset'
                        id: '72b9fb06bd4d4aee9af50a82a62877a9'
                    }
                    'x_snc_time_collect/Analytics-BHpd-zHl.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: 'c2cfc99065034ebcb764bd68f03a60a4'
                    }
                    'x_snc_time_collect/Analytics-ifVL4cmQ': {
                        table: 'sys_ux_lib_asset'
                        id: '443640b579104264b444423a1903b56c'
                        deleted: true
                    }
                    'x_snc_time_collect/Analytics-ifVL4cmQ.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '1e7995366db04500b1fe309157400a59'
                        deleted: true
                    }
                    'x_snc_time_collect/Analytics-jIzXwLGY': {
                        table: 'sys_ux_lib_asset'
                        id: '426650bcc472495a9a8a85ca39608ef2'
                        deleted: true
                    }
                    'x_snc_time_collect/Analytics-jIzXwLGY.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '5bd87fefc1ce4d54ab84850ec181e110'
                        deleted: true
                    }
                    'x_snc_time_collect/fields-BMs58PMa': {
                        table: 'sys_ux_lib_asset'
                        id: 'a8ef127f5596421db7183db2d5121229'
                    }
                    'x_snc_time_collect/fields-BMs58PMa.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '80deff2832ec479c94b1c590175e47be'
                    }
                    'x_snc_time_collect/main': {
                        table: 'sys_ux_lib_asset'
                        id: 'c2cad5843e72451aaf2f0716cbc709f9'
                    }
                    'x_snc_time_collect/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '37ca6c4a4d4342529fcac5291a20c37b'
                    }
                    'x_snc_time_collect/ProjectList-BwsfgWSl': {
                        table: 'sys_ux_lib_asset'
                        id: 'ed14f2932833482a863130577458033b'
                        deleted: true
                    }
                    'x_snc_time_collect/ProjectList-BwsfgWSl.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '47dbe7a506964c47af5e58273b5e6e3b'
                        deleted: true
                    }
                    'x_snc_time_collect/ProjectList-CXbYqUkB': {
                        table: 'sys_ux_lib_asset'
                        id: 'dce3dedacd10409c822ae1bbc9035996'
                        deleted: true
                    }
                    'x_snc_time_collect/ProjectList-CXbYqUkB.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: 'dd784d41c0894fbf9c06e36403117358'
                        deleted: true
                    }
                    'x_snc_time_collect/ProjectList-DwNI4FvN': {
                        table: 'sys_ux_lib_asset'
                        id: '7cc6c52c81af4518b7ff5a7646804cbc'
                    }
                    'x_snc_time_collect/ProjectList-DwNI4FvN.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: 'f60cadb96ec64d2d94c33d3150f6d265'
                    }
                    'x_snc_time_collect/TimeEntryForm-B54fWAqD': {
                        table: 'sys_ux_lib_asset'
                        id: 'd5ee14151b744e2093160baa517a0069'
                        deleted: true
                    }
                    'x_snc_time_collect/TimeEntryForm-B54fWAqD.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: 'd6f89d96e78e4936a24ffc7a3f4a5525'
                        deleted: true
                    }
                    'x_snc_time_collect/TimeEntryForm-C-a3G6fQ': {
                        table: 'sys_ux_lib_asset'
                        id: '7aad5b0802a942a1bcb6aaf514f0d9d9'
                        deleted: true
                    }
                    'x_snc_time_collect/TimeEntryForm-C-a3G6fQ.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: 'f429c1cdb91a451d94e47d2d4f83e921'
                        deleted: true
                    }
                    'x_snc_time_collect/TimeEntryForm-CvgkEs7-': {
                        table: 'sys_ux_lib_asset'
                        id: '9026f24b140c49f5a7d79b2c6b610af7'
                    }
                    'x_snc_time_collect/TimeEntryForm-CvgkEs7-.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '43f5d12f67fe406384a6b9e2fcbc62af'
                    }
                    'x_snc_time_collect/TimeEntryForm-DH7eOqF4': {
                        table: 'sys_ux_lib_asset'
                        id: '2e6feccb854342d0994c5f5bc920a00e'
                        deleted: true
                    }
                    'x_snc_time_collect/TimeEntryForm-DH7eOqF4.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '7a9a845fa0864622b492269da8ca3cec'
                        deleted: true
                    }
                    'x_snc_time_collect/TimeEntryList-7gYTgamm': {
                        table: 'sys_ux_lib_asset'
                        id: 'c327c0a21012480b9c79208eb86da784'
                        deleted: true
                    }
                    'x_snc_time_collect/TimeEntryList-7gYTgamm.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: 'ce64cb0e4bf44595b4927ef192333258'
                        deleted: true
                    }
                    'x_snc_time_collect/TimeEntryList-ByugyLTb': {
                        table: 'sys_ux_lib_asset'
                        id: '4572408abb364c73a5812523e0893968'
                        deleted: true
                    }
                    'x_snc_time_collect/TimeEntryList-ByugyLTb.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '254f126379a84d089617ef96f1195b5c'
                        deleted: true
                    }
                    'x_snc_time_collect/TimeEntryList-D9nfDzeN': {
                        table: 'sys_ux_lib_asset'
                        id: '45c1c96e2ca145b895cbcaafd774c1c1'
                    }
                    'x_snc_time_collect/TimeEntryList-D9nfDzeN.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '05b1cf0eeb064ceab1d73339180c6c12'
                    }
                    'x_snc_time_collect/TimeEntryList-H7cNZqhr': {
                        table: 'sys_ux_lib_asset'
                        id: '602f3ac62514492ebc07354291c04191'
                        deleted: true
                    }
                    'x_snc_time_collect/TimeEntryList-H7cNZqhr.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '88f7583e3b3d459b9a04358b523c9bfc'
                        deleted: true
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '028fe2bf18634fc194912d845600c976'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'hours_worked'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '08d40701f98d4ddda7dd6491e5f335b6'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'status'
                            value: 'planning'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '10d521f7d8354de5b8b02aea165d9a7a'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '11f016c5e2df4015ba9da1fcdc22523b'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'end_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1242ff97242f4df1826c282ce7c5e005'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'status'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '14005f494ec3491ea35af4ec52eac361'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'work_type'
                            value: 'field_work'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1d4225bdbe6e42688321326a59980fe0'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'status'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1f12a722611f4396b56e34aed249486d'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'work_type'
                            value: 'documentation'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1f6d352310fa42f39790a0244d989197'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'work_type'
                            value: 'travel'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1f92d6558f024bbbb206aae8cf2dbe29'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2dc9a899dc7c4846ad17b5b8f575b36f'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'priority'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '2f29608a76ba4a1abe8e02522810631f'
                        key: {
                            role: {
                                id: '40b0b191716f40aca46f6e68180a8936'
                                key: {
                                    name: 'x_snc_time_collect.manager'
                                }
                            }
                            contains: {
                                id: 'c49ad74a17c24e88bcc1dfb2800de2d8'
                                key: {
                                    name: 'x_snc_time_collect.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '30c3d56c09cf41b2a262ac6c40620185'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '31abd1243bef4acbbc300303ff85c4a1'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '327f09b06362423ba0dbe593fc818b04'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '33637e9fc7e647ebaca70603ef6d05bf'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '345d3fe4e77c46c4a6e9302b0763d419'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'billing_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '388df80a285341448b4ed01bf3fdca09'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '39ae9e1565fb46a7801d65ea3b075adc'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'work_type'
                            value: 'administrative'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3a064096949e4121866a101238da00e6'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'project_manager'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '40409b30131d4979bbbc33200230c26f'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'billing_rate'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '40b0b191716f40aca46f6e68180a8936'
                        key: {
                            name: 'x_snc_time_collect.manager'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '42a96524d8774dbcb2b74aeb98ffaf46'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'status'
                            value: 'on_hold'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '451849f984bf4ecd9d1036e3c6e81149'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'project_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '46e6ea9980db4bfd96ce8d7d7962a66c'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '489e582d70114ce4825a366bf5d533e0'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'project_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '48d6a3615e0d4d9ca980f0fce882b52a'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '49744b0f27d64e6186a462f99f6ed0ee'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '49e776a79df2457ba068e31c0f7dc2d6'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'manager_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a03eff4ebd4405abf8351d78ad0534f'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'task_description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4aacab33878e47c98b0b4dbcbe0f22a1'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'project_code'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4c4889045a794c289b0273b13fdb9847'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'work_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4c64ebe83cca401885d4a9853ab89cd4'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'billing_type'
                            value: 'hourly'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4d7752a7cdaa4c04a857ffabb09800e4'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'status'
                            value: 'submitted'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5703332e6d854eda935e59a6fd29c8a9'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'budget_hours'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '5905e6b8e61648f49e4a364b6a16e322'
                        key: {
                            name: 'x_snc_time_collect.admin'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '59dc754a3c10479b8c02dad1c07a73fb'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'project_manager'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5a8cfdc2672143d29dbe40f288507334'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'budget_hours'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5aee4e58ee1b437da3767bc7106586fb'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'approved_by'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5fd013da16b4464facec08d527bfddb0'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'billable'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '661676d39d414cc1a4ddd0be4ac25a5d'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'billing_type'
                            value: 'retainer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6ecec40e12544928847c8f47aeb0a04e'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'hours_worked'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6fc967cc639244b4a54c1bca247bd1db'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'work_type'
                            value: 'meeting'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6fca739288be4b1285327be523aff37a'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'manager_notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '73250fcb10a049149079272c3df6def1'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '754822f8e9564564a37af2141e80d2ca'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'billable'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '78aaa4e4f32b4071b5d568b6c8dd4381'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'work_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7acca7b9a0af4a6da8c24f88d820816f'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7e2e0616155946d38850634905491107'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '8675301538974edd97d08d50ecb9ae83'
                        key: {
                            role: {
                                id: '5905e6b8e61648f49e4a364b6a16e322'
                                key: {
                                    name: 'x_snc_time_collect.admin'
                                }
                            }
                            contains: {
                                id: '40b0b191716f40aca46f6e68180a8936'
                                key: {
                                    name: 'x_snc_time_collect.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8aa0081574534bbb8170a6867c38bbe4'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'work_type'
                            value: 'consultation'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8c02cc0212c24d9daaff51d6895d27fd'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8c3e0dee0931492fa0c346d454337886'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'priority'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8de46470b1734aac99e6ec56f098c14d'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '918869d4354c42efb10bfd46e3205b62'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'project_code'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9196ba57c2ad46afb6630e9f0dfb96db'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9529b49e92684c6a93d2aebebaa857c3'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '98298a5943424f3695b65e89d3bf1fef'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'client_name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '988486334ae64581b3f3382dbee6712b'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'status'
                            value: 'invoiced'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9956afc768774faabe2edaa5c97d3005'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'start_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a05b0863decb4d818f851ecd9e56542b'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'budget_amount'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a16ef245bc7644acb9c7599606c50624'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'approved_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4d3a8d621e544af9aa1c622e42dc0e9'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'work_type'
                            value: 'analysis'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a5747b11af6844fb89df80751e9f5081'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'project_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a618bb9733ea40faa51dceb0bed50684'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aa2ad0bc5a7a4f0e87bf6fd6c8a159c1'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'start_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ab74e23fb5d3470598c257215c601a01'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b3396615dc1740619135b3c9d2c3cb6a'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'work_type'
                            value: 'design'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b3597fa4cb0a41b2ac7cd17823355e57'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b63bf60d9f8c4cb7b49860123a7aa155'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'budget_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b8b3be3fb27c4f52acf8f3bb2fffb89e'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'c49ad74a17c24e88bcc1dfb2800de2d8'
                        key: {
                            name: 'x_snc_time_collect.user'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'c76685d7e7274795a90397f48ed12796'
                        key: {
                            name: 'x_snc_time_collect_project'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c773f2d960a443959e6799b6a577ebf6'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'employee'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca05b1b4382242b19747e3d965fc7679'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'billing_rate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca2bb50badd744ec9d215566989a79cf'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'client_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd026b33df4024d8989c957b0e85b9b31'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'work_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd0e16cbf79384e3993424e5f36c5d64b'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd557c6ff656a43e888de684a4afdfe6b'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'priority'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd9430223242e4805bdcac9ce8eae426c'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'approved_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ddbd7ceccf4643c297688b4a394c17ec'
                        key: {
                            name: 'x_snc_time_collect_project'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dddee05914e543c89e535a11f31be2a7'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'end_time'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e02383061c1e40bea50b48744ce7aae3'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'billing_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e48e00a30d0c477babf5cb912a5053b2'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'client_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e4adf07477404534ac2cf2d9befeb4ba'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'employee'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'eac8d54e159143cabaebd360bbce05d1'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'billing_type'
                            value: 'fixed_price'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ece895ac41f24866a668a45d14a3e704'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ed27b1e3c9054322a5c289b457e5e982'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'priority'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ef732448cc7140baaa1973278d88cf68'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'project_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'efbe928770c94b43a2970811d4932b05'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'billing_type'
                            value: 'time_and_materials'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f0386785a6d54761b7dd4cb304541fa4'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'approved_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f35856cafb8e4ce8b38c2b1af9dd52b0'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'task_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f68f384601f14d8a8b63dd4bb33ef8f2'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'client_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f735644dd87141c9ac5d3df926b6acd9'
                        key: {
                            name: 'x_snc_time_collect_time_entry'
                            element: 'work_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f7ea20d2eda84cd79b1d207dd0f26d4b'
                        key: {
                            name: 'x_snc_time_collect_project'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
