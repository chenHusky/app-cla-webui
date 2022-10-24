module.exports = {
    signType: {
        corp: 'Corporation',
        emp: 'Employee',
        individual: 'Individual',
        corpBt: ' Sign Corporation CLA ',
        empBt: ' Sign Employee CLA ',
        individualBt: ' Sign Individual CLA ',
        guideTitle: 'Signing CLA Guide for',
        mobileGuideTitle: 'Guide for...',
        corpStep1_1: 'If you are signing the CLA as an enterprise that wants to contribute code to the community, please click "',
        corpStep1_2: '" to go to the CLA signing page.',
        corpStep2: 'Fill in the information and submit for signature.',
        corpStep3: 'Receive an e-mail from the community to sign the enterprise CLA. Follow the instructions in the e-mail to sign the CLA.',
        corpStep4: 'The community administrator approves the CLA file signed by the enterprise and enables the administrator account of the enterprise in the community.',
        corpStep5: 'Receive an e-mail containing the administrator account, indicating that the CLA is signed successfully.',
        corpStep6_1: 'Log in to the',
        corpStep6_2: 'add an employee as administrator, and download the enterprise CLA file.',
        empStep1_1: 'If you have signed the CLA as an employee of a company that has signed the CLA, please click“',
        individualStep1_1: 'If you are an independent developer or your company has not signed the enterprise CLA with the community, please click“',
        claSignPlatform: ' CLA signing platform ',
        empStep2: 'Agree to access your authorize account on the CLA signing platform and go to the employee CLA signing page.',
        empStep4: 'Wait for the administrator of your enterprise in the community to activate the signed CLA file you submitted.',
        empStep5: 'Receive an e-mail indicating that the CLA is signed and activated.',
        individualStep2: 'Agree to access your authorize account on the CLA signing platform and go to the individual CLA signing page.',
        individualStep4: 'Receive an e-mail indicating that the the CLA is signed and activated.',
        admin_platform: ' Administrator platform ',
        not_support_corp: 'Corporation signing is not supported at the moment',
        not_support_emp: 'Employee signing is not supported at the moment',
        not_support_individual: 'Individual signing is not supported at the moment'
    },
    signPage: {
        claTitle: 'Sign CLA',
        corp: 'Corporation ',
        emp: 'Employee ',
        individual: 'Individual ',
        requireText: 'require field.',
        checkBoxText1: 'I have read the',
        privacy: ' Privacy Policy ',
        checkBoxText2: 'and hereby consent to the processing of my data by',
        claSignPlatform: ' CLA signing platform ',
        checkBoxText3: 'in Hong Kong.',
        verifyCode: 'Verify Code',
        sendCode: 'send code',
        reSendCode: '{second}s can resend',
        sign: 'SIGN',
        signing: 'SIGNING',
        verifyCodeHolder: 'please enter verify code',
        holder: 'please enter {title}',
        sendCodeTip: 'Send verification code to email'
    },
    tips: {
        failedTitle: 'Failed',
        successTitle: 'Successfully',
        warningTitle: 'Warning',
        dialogBt: 'OK',
        no_cla_binding_corp: 'There is no CLA to sign for corporation.',
        no_cla_binding_emp: 'There is no CLA to sign for employee.',
        no_cla_binding_individual: 'There is no CLA to sign for individual.',
        has_signed: 'You have signed this CLA before.',
        corp_has_signed: 'The corporation has  signed this CLA before.',
        invalid_parameter: 'The parameter is invalid and cannot be signed',
        no_corp_manager: 'Your company has not signed corporation CLA or added any manager. You can\'t sign as employee',
        has_not_signed: 'Your corporation has not signed.',
        invalid_token: 'Token expired, please login again.',
        missing_token: 'Token invalid, please login again.',
        unknown_token: 'Token invalid, please login again.',
        unauthorized_token: 'the permission of token is unmatched，please try again',
        uncompleted_signing: 'The signing process of corporation is not finish yet.',
        unknown_email_platform: 'This type of mailbox is not supported at the moment',
        failed_to_send_email: 'Failed to send mail.',
        wrong_verification_code: 'Verification code error.',
        restricted_email_suffix: 'Restricted email suffixes. Please use the company\'s exclusive email',
        expired_verification_code: 'Verification code expired.',
        pdf_has_not_uploaded: 'Signature of organization is not uploaded.',
        num_of_corp_managers_exceeded: 'The number of managers exceeds the limit.',
        corp_manager_exists: 'The name is exists already.',
        not_same_corp: 'Email does not belong to the corporation.',
        not_ready_to_sign: 'The organization is not ready.',
        system_error: 'System error, please try again',
        unknown_error: 'Unknown error,please contact the community administrator or submit yaml',
        title_type_repeat: 'Same titles or types are filled.',
        individual_sign: 'Thanks for your sign.',
        corp_sign: 'An email has been sent to you. Please complete the signing according to the steps in the email.',
        emp_sign: 'An email has been sent to you. Please take a look to review the signing.',
        invalid_telephone_num: 'An invalid telephone number.',
        not_fill_telephone_num: 'Please enter telephone number',
        not_fill_address: 'Please enter address',
        not_fill_fax: 'Please enter fax',
        invalid_email: 'An invalid E-mail.',
        sending_email: 'A verification code is sent to your Email.',
        send_find_pwd_email: 'An email to reset your password has been sent to your mailbox. Please complete the password reset according to the prompt.',
        not_fill_email: 'Please enter the correct email',
        no_public_email_1: 'Sorry, it is failed to fetch the email for committing code from your {platform} account. Please',
        click_here: ' click here ',
        gitee_no_public_email_2: 'go to the mailbox setting page, and cancel the check of "don\'t open my email address". If you haven\'t bound any email for your account, please click add, bind email and try again',
        github_no_public_email_2: 'go to the mailbox setting page, and cancel the check of "Keep my email addresses private". If you haven\'t bound any email for your account, please click add, bind email and try again',
        not_authorize_email: 'You didn\'t authorize us to access your email. Please check and try again.',
        not_authorize_group: 'You have not authorized us to access your organization information. Please authorize and try again',
        refuse_authorize: 'You do not agree to the authorization to access your {platform} account information, so you cannot continue to sign',
        lang_error: 'Language wrong',
        fill_name: 'Please enter name',
        fill_corp_name: 'Please enter the name of corporation.',
        fill_representative_title: 'Please enter the title of representative.',
        fill_representative_name: 'Please enter the name of representative.',
        fill_date: 'Please enter date',
        fill_verification_code: 'Please enter the verification code.',
        fill_authorize_code: 'Please enter the authorization code.',
        review_privacy: 'Please review the privacy statement.',
        not_fill_id: 'Please enter the id',
        invalid_account_or_pw: 'The old password is invalid, please try again.',
        fill_pwd: 'Please enter the password.',
        id_pwd_err: 'ID or password is wrong, please try again.',
        same_email: 'Can\'t fill in the same email.Please check and try again',
        same_id: 'Can\'t fill in the same id.Please check and try again',
        exits_email: 'Email existed.Please check and try again',
        exits_id: 'ID existed.Please check and try again',
        invalid_id: 'ID format error,ID can only contain upper and lower case letters, numbers, _ and .',
        paste_individual_link: 'Please paste the CLA link applied to the individual signature',
        select_individual_language: 'Please select the language to apply to the CLA signed by the individual',
        paste_corp_link: 'Please paste the CLA link applied to the corporation signature',
        select_corp_language: 'Please select the language to apply to the CLA signed by the corporation',
        authorized_email: 'Please authorize an email for your organization or repository to communicate with the signer',
        upload_signature_file: 'Please upload a PDF file with the signature of the community',
        not_upload_file: 'No file has been uploaded. Please upload and try again',
        no_file_can_download: 'No files available',
        no_lang: '{language} is not supported at the moment，please switch languages in the upper right corner and try again',
        no_pdf_of_corp: 'PDF corporation signed has not been uploaded,please upload and try again',
        not_pdf: 'Upload file must be PDF!',
        file_too_large: 'The uploaded file is too large!',
        cla_exists: '{lang} agreement already exists. Please choose another language and try again',
        email_system_error: 'Email authorization failed. Please try again later',
        error_parsing_api_body: 'Parameter error, please try again',
        unmatched_email: 'The signed email is not the same as the authorized account email',
        unmatched_user_id: 'The signed ID is not the same as the authorized account ID',
        no_link: 'The community has not been bound to CLA',
        unmatched_cla: 'The current CLA is not the latest CLA, please refresh the page and try again',
        link_exists: 'Binding information already exists in this community',
        checkRepoMessage: 'The repository you entered does not belong to the organization, or the repository is private or does not exist. Do you want to continue?',
        cla_is_used: 'The CLA has been used',
        go_to_sign_employee_cla: 'Your company has signed corporation CLA, so you can only sign employee CLA',
        page_error: 'Page error, please close the page and reopen',
        subemailErr: 'Please enter a subemail that meets the email Extension Rules',
        noSession: 'System error, please refresh the email domain list and try again',
        sameEmailSuffix: 'Email domain already exists, please do not add it repeatedly',
        no_link_or_unsigned: 'Invalid binding information',
        not_support_platform: 'Privacy policy of this platform is not supported at present. Please store the privacy policy in the public warehouse of Gitee or Github',
        has_same_lang_privacy: 'Do not configure privacy policy in the same language',
        privacy_conf_err: 'Privacy policy configuration error',
        unknown_email: 'Invalid email address. Enter an administrator or manager email address.',
        reset_password_success: 'Password reset successfully',
        link_expired: 'The link has expired',
        illegal_link: 'Illegal link',
        send_reset_password_email: 'An email to reset your password has been sent to your mailbox',
        loading: 'Loading',
        change_to_Gmail: 'Are you sure to change it to G-Mail:',
        select_file: 'Please select file first'
    },
    header: {
        home: 'Home',
        manager: 'Manager',
        emp: 'Employee',
        SubEmail: 'Email Domain',
        createManager: 'Create Manager',
        resetPwd: 'Reset Password',
        corpCla: 'CLA',
        loginOut: 'Login out'
    },
    corp: {
        number: 'Number',
        id: 'ID',
        name: 'Name',
        email: 'Email',
        role: 'Role',
        operation: 'Operation',
        delete: 'Delete',
        cancel: 'Cancel',
        batch: 'Batch',
        deleteTips: 'Are you sure to delete ?',
        completeDeleteTips: 'Are you sure to delete it completely?',
        yes: 'Yes',
        no: 'No',
        submit: 'Submit',
        reset: 'Reset',
        manager_limit: 'Create up to {limit} manager',
        fill_complete: 'Please fill in the complete information.',
        input_old_pwd: 'Please enter old password',
        input_new_pwd: 'Please enter new password',
        input_new_pwd_again: 'Please enter the new password again',
        newPwd_diff_with_oldPwd: 'The new password cannot be the same as old one.',
        newPwd_diff: 'The repeated password is not the same as the first one.',
        pwd: 'Password',
        forget_pwd: 'Forget password?',
        login_in: 'Login in',
        logining: 'Logining',
        inactive: 'inactive',
        active: 'active',
        no_data: 'No data',
        manager_email_same_with_admin: 'Administrator cannot be added as employee manager',
        select_community: 'Please select the community you want to manage',
        select_placeholder: 'select',
        newPwd_length_err: 'the length of password should be between {minLength} and {maxLength}',
        newPwd_contains_Illegal_character: 'The length of the new password must be between {minLength} and {maxLength}, and contain at least three of uppercase letters, lowercase letters, numbers, and special characters',
        email_input_holder: 'Please enter email',
        find_pwd_step1: 'Send email',
        find_pwd_step2: 'Reset password',
        managerName: 'Manager Name',
        managerEmail: 'Manager Email',
        managerId: 'Manager ID',
        managerIdDesc: 'The ID used by the manager to log in to the system, can be customized and cannot be repeated',
        search: 'Search',
        corpName: 'Corporation Name',
        addSubEmail: 'Add Email Domain',
        subEmailDesc: 'In the enter box below, enter a email containing the domain you need to add. After verification, it can be added successfully, and the employee can use the email with the same domain as the sub email for employee signature',
        send: 'Send'
    },
    index: {
        org_login: 'Opensource Community Manager',
        corp_login: 'Corporation Manager',
        org_bt_tip: 'If you are an opensource community manager, please click this button to log in and manage the signing information',
        corp_bt_tip: 'If you are an corporation administrator or manager, please click this button to log in and manage the signing information'
    },
    org: {
        corp_signed_pdf: 'The enterprise has completed the signed PDF',
        resend_tip: 'If the enterprise does not receive the email containing the PDF that needs the enterprise signature after signing, you can click here to resend',
        configure_bt: 'Configure CLA',
        linked_tab: 'Linked Repositories',
        repository: 'Repository',
        organization: 'Organization',
        unlink: 'Unlink',
        operation: 'Operation',
        toSign: 'Sign',
        copy_address: 'Copy address',
        toDetail: 'Detail',
        unlink_p: 'Are you sure you want to unlink?',
        unlink_will: 'Unlinking will...',
        unlink_desc1: 'Remove the CLA assistant webhook in your repository/organization',
        unlink_desc2: 'Remove the link to your list of contributors',
        select_file: 'select file',
        upload: 'upload',
        corporation_name: 'Corporation Name',
        signed_corporation: 'Signed Corporation',
        create_administrator: 'Create Administrator',
        resend_email: 'Resend Email',
        individual_cla: 'Individual CLA',
        toLanguage: 'Language',
        modify_field: 'Modify field',
        delete_cla: 'Delete CLA',
        add_cla_for_other_language: 'Add CLA for other language',
        corporation_cla: 'Corporation CLA',
        download: 'download',
        preview: 'preview',
        upload_file: 'upload file',
        select: 'select',
        resend_email_message: 'Are you sure to resend email?',
        to_email: 'Email',
        upload_loading_text: 'uploading...',
        file_limit_tips: 'Only one file can be uploaded.',
        remove_file_tips: 'Are you sure you want to remove {fileName}？',
        success: 'success',
        cancel_remove: 'Cancel',
        confirm_remove: 'Confirm',
        config_cla_select_org_tile: 'Choose a organization or repository',
        config_cla_select_org: 'Select an organization that needs to configure CLA',
        config_cla_select_org_placeholder: 'select organization',
        config_cla_select_org_alias: 'You need an alias for the organization you choose. If you do not fill in the alias, it will be the same as the organization name by default',
        config_cla_select_org_alias_placeholder: 'Enter organization alias',
        config_cla_select_repo: 'If you want to configure CLA for a repository under the organization, please enter the repository. If not, please ignore it',
        config_cla_select_repo_placeholder: 'Please enter repository',
        next_step: 'Next Step',
        previous_step: 'Previous Step',
        modify_email: 'Modify Email',
        config_cla_email_title: 'Email',
        config_cla_mailbox_type: 'E-Mail Service',
        config_cla_tencent_email: 'Tencent Exmail',
        config_cla_email_address: 'E-Mail',
        config_not_fill_address: 'Please enter E-Mail',
        config_cla_authorize_code: 'Authorization Code',
        config_cla_validation_title: 'Verify',
        config_fill_verification_code: 'Please enter verify code',
        config_cla_email_authorize: 'Authorize an email to communication with the signer',
        config_cla_email_placeholder: 'click to grant authorized email',
        config_cla_email_platform_select: 'You need to authorize a mailbox for your organization',
        config_cla_email_platform_select_placeholder: 'Select email type',
        config_cla_email_authorize_desc: 'CLA system will...',
        config_cla_email_authorize_desc1: 'Send the super administrator account for the enterprise through the mailbox',
        config_cla_email_authorize_desc2: 'Send the e-mail containing the signed document to the enterprise through this mailbox',
        config_cla_email_authorize_desc3: 'Send the email of employee signing status change to the enterprise manager through the mailbox',
        config_cla_paste_url_title: 'Paste a url of a CLA file',
        config_cla_paste_url_title_tooltips: 'Paste a url to the original data of a CLA in the repository',
        config_cla_paste_individual_url: 'Individual CLA url',
        config_cla_individual_url_desc: 'You need to paste a download address of PDF file applied to individual CLA from {platform} public repository',
        config_cla_url_placeholder: 'Paste a Url',
        config_cla_individual_lang: 'Individual CLA language',
        config_cla_select_lang: 'select language',
        config_cla_corp_url: 'If you need your community support corporation to sign up for CLA, please complete the following information. If not, please ignore it',
        config_cla_paste_corp_url: 'Corporation CLA url',
        config_cla_corp_url_desc: 'You need to paste a download address of PDF file applied to corporation CLA from {platform} public repository',
        config_cla_corp_lang: 'Corporation CLA language',
        config_cla_download_empty_signature_tips: 'Please select the language of the signature page to be downloaded first',
        config_cla_fields: 'Edit CLA\'s Fields',
        config_cla_fields_desc: 'The information you want contributors to fill in when they sign the CLA.Title and type are required, otherwise the field will fail to be added',
        config_cla_individual_metadata: 'For Individual Metadata',
        config_cla_individual_metadata_desc: 'Configure the field information for individual and employee signers',
        config_cla_fields_title_placeholder: 'Please select title',
        config_cla_fields_type_placeholder: 'Select data type',
        config_cla_fields_desc_placeholder: 'description',
        config_cla_fields_required: 'required',
        config_cla_corp_metadata: 'For Corporation Metadata',
        config_cla_corp_metadata_desc: 'Configure the field information for corporation signers',
        config_cla_field_type_name: 'name',
        config_cla_field_type_corporationName: 'corporation name',
        config_cla_field_type_date: 'date',
        config_cla_field_type_telephone: 'telephone',
        config_cla_field_type_address: 'address',
        config_cla_field_type_email: 'email',
        config_cla_field_type_fax: 'fax',
        config_cla_field_individual_default_title1: 'Name',
        config_cla_field_individual_default_title1_desc: 'your name',
        config_cla_field_individual_default_title2: 'E-Mail',
        config_cla_field_individual_default_title2_desc: 'your email',
        config_cla_field_corp_default_title1: 'Authorized Representative',
        config_cla_field_corp_default_title1_desc: 'Name of authorized representative',
        config_cla_field_corp_default_title2: 'Corporation Name',
        config_cla_field_corp_default_title2_desc: 'corporation name',
        config_cla_field_corp_default_title3: 'E-Mail',
        config_cla_field_corp_default_title3_desc: 'corporation email',
        config_cla_field_corp_default_title4: 'Title',
        config_cla_field_corp_default_title4_desc: 'Your title in corporation',
        config_cla_check_org_repo_title: 'Organization and repository',
        config_cla_check_org_title: 'Organization',
        config_cla_check_org_alias_title: 'Organization alias',
        config_cla_check_repo_title: 'Repository',
        config_cla_check_email_title: 'Email',
        config_cla_check_url_title: 'Url of CLA file',
        config_cla_check_fields_title: 'CLA\'s Fields',
        config_cla_check_fields_title_title: 'Title',
        config_cla_check_fields_type_title: 'Type',
        config_cla_check_fields_describe_title: 'Describe',
        config_cla_check_fields_require_title: 'Require',
        submit: 'submit',
        signature_file_size: 'Only PDF / PDF files can be uploaded, and no more than {max_size_m}M',
        addIndividualCla: 'Add individual CLA',
        addCorpCla: 'Add corporation CLA',
        invalidSignature: 'Deleted Corporation',
        reduction: 'Reduction',
        deleteCompletely: 'Delete Completely',
        date: 'Date',
        cla_language: 'CLA Language',
        not_complete: 'Not Complete',
        complete: 'Complete',
        cla_format_err: 'CLA file must be pdf'
    }
};
