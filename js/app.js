// ========================================
// GDPR Data Deletion Request Generator
// ========================================

// Email Templates for Different Regulations
const templates = {
    gdpr: {
        subject: "GDPR Data Deletion Request - Article 17 (Right to Erasure)",
        body: `Subject: GDPR Data Deletion Request - Article 17 (Right to Erasure)

Dear Data Protection Officer / Privacy Team,

I am writing to formally request the complete deletion of my personal data held by [COMPANY_NAME], in accordance with Article 17 of the General Data Protection Regulation (GDPR).

**My Details:**
Full Name: [USER_NAME]
Email Address: [USER_EMAIL]
[ACCOUNT_INFO]

**Request:**
I hereby exercise my right to erasure under GDPR Article 17(1). I request that you:

1. ✅ Delete all personal data you hold about me
2. ✅ Cease all processing of my personal information
3. ✅ Inform any third parties with whom you have shared my data to delete it
4. ✅ [DELETE_ACCOUNT]Permanently close and delete my account[/DELETE_ACCOUNT]
5. ✅ Provide written confirmation once deletion is complete

**Legal Basis:**
Under GDPR Article 17, I have the right to obtain erasure of personal data concerning me where one of the following grounds applies:
- The data is no longer necessary for the purposes for which it was collected
- I withdraw consent on which the processing is based
- I object to the processing and there are no overriding legitimate grounds

**Response Timeline:**
As per GDPR Article 12(3), you must respond to this request within one month of receipt. [URGENT_REQUEST]Given the sensitive nature of my data, I request expedited processing.[/URGENT_REQUEST]

**Confirmation Required:**
Please confirm in writing that you have:
- Deleted all my personal data from your systems
- Notified third parties of the erasure
- Permanently closed my account (if applicable)

If you cannot fully comply with this request, please provide specific reasons citing the relevant GDPR provisions.

Thank you for your prompt attention to this matter.

Best regards,
[USER_NAME]
[USER_EMAIL]

---
⚖️ This request is made under GDPR (EU Regulation 2016/679)
📅 Date: [CURRENT_DATE]
🔒 Confidentiality: This email may contain legally privileged information`
    },

    ccpa: {
        subject: "CCPA Data Deletion Request - Right to Delete",
        body: `Subject: CCPA Data Deletion Request - Right to Delete

Dear Privacy Team,

I am a California resident exercising my rights under the California Consumer Privacy Act (CCPA). I hereby request the deletion of my personal information held by [COMPANY_NAME].

**My Details:**
Full Name: [USER_NAME]
Email Address: [USER_EMAIL]
[ACCOUNT_INFO]

**Request:**
Pursuant to CCPA Section 1798.105, I request that you:

1. ✅ Delete all personal information you have collected from me
2. ✅ Direct any service providers to delete my personal information
3. ✅ [DELETE_ACCOUNT]Delete my account and associated data[/DELETE_ACCOUNT]
4. ✅ Provide confirmation of deletion within 45 days

**Verification:**
I confirm that I am the individual to whom this personal information pertains. If you require additional verification, please contact me at the email address provided.

**Legal Rights:**
Under CCPA, I have the right to request deletion of personal information collected from me, subject to certain exceptions outlined in Section 1798.105(d).

**Response Timeline:**
[URGENT_REQUEST]I request expedited processing of this deletion request.[/URGENT_REQUEST] You must confirm receipt within 10 days and complete the deletion within 45 days, as required by CCPA regulations.

Please confirm in writing once all my personal information has been deleted from your records and those of your service providers.

Thank you for your compliance.

Sincerely,
[USER_NAME]
[USER_EMAIL]

---
⚖️ This request is made under CCPA (California Civil Code §1798.100 et seq.)
📅 Date: [CURRENT_DATE]
📍 Jurisdiction: California, USA`
    },

    pdpl: {
        subject: "PDPL Data Deletion Request - Article 26",
        body: `Subject: PDPL Data Deletion Request - Article 26 (Right to Erasure)

السلام عليكم ورحمة الله وبركاته
Dear Data Controller,

I am writing to formally request the deletion of my personal data held by [COMPANY_NAME] in accordance with Article 26 of the Personal Data Protection Law (PDPL) of Saudi Arabia.

**My Details:**
Full Name: [USER_NAME]
Email Address: [USER_EMAIL]
[ACCOUNT_INFO]

**Request:**
Pursuant to Article 26 of the PDPL, I exercise my right to request erasure of my personal data. I request that you:

1. ✅ Delete all personal data you process about me
2. ✅ Cease all processing activities
3. ✅ [DELETE_ACCOUNT]Close and delete my account permanently[/DELETE_ACCOUNT]
4. ✅ Provide written confirmation of deletion

**Legal Basis:**
Under PDPL Article 26, I have the right to request erasure of my personal data when:
- The data is no longer necessary for the purposes for which it was collected
- I withdraw consent upon which processing is based
- The data has been unlawfully processed

**Response Required:**
[URGENT_REQUEST]I request urgent processing of this deletion request.[/URGENT_REQUEST] Please confirm receipt of this request and provide a timeline for completion.

Please confirm in writing that all my personal data has been permanently deleted from your systems.

Best regards,
[USER_NAME]
[USER_EMAIL]

---
⚖️ This request is made under PDPL (Saudi Arabia)
📅 التاريخ / Date: [CURRENT_DATE]`
    },

    lgpd: {
        subject: "LGPD Data Deletion Request - Article 18",
        body: `Subject: LGPD Data Deletion Request - Article 18

Prezado(a) Encarregado(a) de Proteção de Dados,

Solicito formalmente a exclusão dos meus dados pessoais mantidos por [COMPANY_NAME], de acordo com o Artigo 18 da Lei Geral de Proteção de Dados (LGPD) do Brasil.

**Meus Dados:**
Nome Completo: [USER_NAME]
Endereço de E-mail: [USER_EMAIL]
[ACCOUNT_INFO]

**Solicitação:**
Nos termos do Artigo 18 da LGPD, solicito que:

1. ✅ Excluam todos os dados pessoais que possuem sobre mim
2. ✅ Cessem todo o processamento das minhas informações
3. ✅ [DELETE_ACCOUNT]Excluam permanentemente minha conta[/DELETE_ACCOUNT]
4. ✅ Forneçam confirmação por escrito da exclusão

**Base Legal:**
Conforme LGPD Art. 18, tenho o direito de solicitar a eliminação dos dados pessoais tratados com o meu consentimento.

**Prazo de Resposta:**
[URGENT_REQUEST]Solicito processamento urgente desta requisição.[/URGENT_REQUEST] Aguardo confirmação da exclusão em até 15 dias, conforme estabelecido pela LGPD.

Agradeço a atenção e aguardo confirmação.

Atenciosamente,
[USER_NAME]
[USER_EMAIL]

---
⚖️ Solicitação feita sob LGPD (Lei nº 13.709/2018)
📅 Data: [CURRENT_DATE]`
    },

    generic: {
        subject: "Personal Data Deletion Request",
        body: `Subject: Personal Data Deletion Request

Dear Privacy Team,

I am writing to request the deletion of all personal data you hold about me. I am exercising my right to data deletion under applicable data protection laws.

**My Details:**
Full Name: [USER_NAME]
Email Address: [USER_EMAIL]
[ACCOUNT_INFO]

**Request:**
I formally request that you:

1. ✅ Delete all personal data you have collected from me
2. ✅ Stop processing my personal information
3. ✅ [DELETE_ACCOUNT]Permanently delete my account[/DELETE_ACCOUNT]
4. ✅ Provide written confirmation of deletion

**Privacy Rights:**
Under international data protection standards and best practices, individuals have the right to request deletion of their personal data.

[URGENT_REQUEST]**Urgent Request:**
Due to the sensitive nature of my data, I request expedited processing of this deletion request.[/URGENT_REQUEST]

Please confirm in writing once all my personal data has been permanently deleted from your systems.

Thank you for your attention to this matter.

Best regards,
[USER_NAME]
[USER_EMAIL]

---
📅 Date: [CURRENT_DATE]
🔒 Privacy Request`
    }
};

// Form Elements
const form = document.getElementById('deletionForm');
const outputSection = document.getElementById('outputSection');
const generatedText = document.getElementById('generatedText');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const emailBtn = document.getElementById('emailBtn');

// Form Submit Handler
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const userName = document.getElementById('userName').value.trim();
        const userEmail = document.getElementById('userEmail').value.trim();
        const companyName = document.getElementById('companyName').value.trim();
        const companyEmail = document.getElementById('companyEmail').value.trim();
        const regulation = document.getElementById('regulation').value;
        const includeAccount = document.getElementById('includeAccount').checked;
        const urgentRequest = document.getElementById('urgentRequest').checked;

        // Validate inputs
        if (!userName || !userEmail || !companyName) {
            alert('⚠️ Please fill in all required fields!');
            return;
        }

        // Generate the deletion request
        const deletionRequest = generateDeletionRequest({
            userName,
            userEmail,
            companyName,
            companyEmail,
            regulation,
            includeAccount,
            urgentRequest
        });

        // Display the output
        generatedText.textContent = deletionRequest;
        outputSection.style.display = 'block';

        // Smooth scroll to output
        outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Store data for email button
        outputSection.dataset.companyEmail = companyEmail;
        outputSection.dataset.subject = templates[regulation].subject.replace('[COMPANY_NAME]', companyName);
    });
}

// Generate Deletion Request Function
function generateDeletionRequest(data) {
    let template = templates[data.regulation].body;

    // Replace placeholders
    template = template.replace(/\[USER_NAME\]/g, data.userName);
    template = template.replace(/\[USER_EMAIL\]/g, data.userEmail);
    template = template.replace(/\[COMPANY_NAME\]/g, data.companyName);

    // Add current date
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    template = template.replace(/\[CURRENT_DATE\]/g, currentDate);

    // Handle account deletion option
    if (data.includeAccount) {
        template = template.replace(/\[DELETE_ACCOUNT\]/g, '');
        template = template.replace(/\[\/DELETE_ACCOUNT\]/g, '');
    } else {
        template = template.replace(/\[DELETE_ACCOUNT\].*?\[\/DELETE_ACCOUNT\]/g, '');
    }

    // Handle urgent request option
    if (data.urgentRequest) {
        template = template.replace(/\[URGENT_REQUEST\]/g, '');
        template = template.replace(/\[\/URGENT_REQUEST\]/g, '');
    } else {
        template = template.replace(/\[URGENT_REQUEST\].*?\[\/URGENT_REQUEST\]/g, '');
    }

    // Handle account info
    if (data.companyEmail) {
        const accountInfo = `Account Email: ${data.userEmail}`;
        template = template.replace(/\[ACCOUNT_INFO\]/g, accountInfo);
    } else {
        template = template.replace(/\[ACCOUNT_INFO\]/g, '');
    }

    // Clean up extra line breaks
    template = template.replace(/\n\n\n+/g, '\n\n');

    return template;
}

// Copy to Clipboard
if (copyBtn) {
    copyBtn.addEventListener('click', function() {
        const text = generatedText.textContent;

        navigator.clipboard.writeText(text).then(function() {
            showSuccessMessage(copyBtn, '✅ Copied to Clipboard!');
        }).catch(function() {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showSuccessMessage(copyBtn, '✅ Copied!');
        });
    });
}

// Download as Text File
if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
        const text = generatedText.textContent;
        const companyName = document.getElementById('companyName').value.trim();
        const fileName = `data-deletion-request-${companyName.replace(/\s+/g, '-').toLowerCase()}.txt`;

        const blob = new Blob([text], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);

        showSuccessMessage(downloadBtn, '💾 Downloaded!');
    });
}

// Send via Email
if (emailBtn) {
    emailBtn.addEventListener('click', function() {
        const text = generatedText.textContent;
        const subject = outputSection.dataset.subject;
        const companyEmail = outputSection.dataset.companyEmail;

        const mailtoLink = `mailto:${companyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;

        window.location.href = mailtoLink;

        showSuccessMessage(emailBtn, '📧 Email Client Opened!');
    });
}

// Show Success Message
function showSuccessMessage(button, message) {
    const originalText = button.textContent;
    button.textContent = message;
    button.style.background = '#10b981';
    button.style.color = 'white';

    setTimeout(function() {
        button.textContent = originalText;
        button.style.background = '';
        button.style.color = '';
    }, 2000);
}

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(function(question) {
    question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all FAQs
        document.querySelectorAll('.faq-item').forEach(function(item) {
            item.classList.remove('active');
        });

        // Open clicked FAQ if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Form Validation Enhancement
if (form) {
    const inputs = form.querySelectorAll('input[required]');
    inputs.forEach(function(input) {
        input.addEventListener('blur', function() {
            if (!this.value.trim()) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '#10b981';
            }
        });

        input.addEventListener('input', function() {
            if (this.value.trim()) {
                this.style.borderColor = '#10b981';
            }
        });
    });
}
