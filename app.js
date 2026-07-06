// Default templates configuration
const DEFAULT_TEMPLATES =
  [
    {
      "id": "7.1-checklist-ticket-minimum",
      "name": "Checklist Ticket Minimum",
      "icon": "📋",
      "description": "Memastikan setiap laporan, request, atau issue operasional tercatat dengan data minimum sebelum diproses.",
      "fields": [
        { "id": "ticket-id", "label": "Ticket ID", "type": "text", "placeholder": "Automated / TCK-XXXXXXXX", "defaultValue": "", "required": true },
        { "id": "customer", "label": "Customer", "type": "text", "placeholder": "PT Contoh Digital", "defaultValue": "", "required": true },
        { "id": "contact", "label": "Contact", "type": "text", "placeholder": "Bapak Andi - 0812xxxx", "defaultValue": "", "required": true },
        { "id": "service-vm-ip-domain", "label": "Service/VM/IP/Domain", "type": "text", "placeholder": "VM-WEB-01/203.0.113.10", "defaultValue": "", "required": true },
        { "id": "issue-summary", "label": "Issue Summary", "type": "textarea", "placeholder": "Ringkasan issue...", "defaultValue": "", "required": true },
        { "id": "time-detected", "label": "Time Detected", "type": "text", "placeholder": "01/07/2026 09:18 WIB", "defaultValue": "", "required": true },
        { "id": "impact", "label": "Impact", "type": "textarea", "placeholder": "Dampak yang dirasakan customer...", "defaultValue": "", "required": true },
        { "id": "severity", "label": "Severity", "type": "select", "options": ["Sev 1", "Sev 2", "Sev 3", "Sev 4"], "defaultValue": "Sev 3", "required": true },
        { "id": "initial-check", "label": "Initial Check", "type": "textarea", "placeholder": "Pengecekan awal yang dilakukan...", "defaultValue": "", "required": true },
        { "id": "current-status", "label": "Current Status", "type": "text", "placeholder": "Status terakhir ticket...", "defaultValue": "", "required": true },
        { "id": "owner", "label": "Owner", "type": "text", "placeholder": "COE-I: Nama", "defaultValue": "", "required": true },
        { "id": "next-action", "label": "Next Action", "type": "text", "placeholder": "Langkah berikutnya...", "defaultValue": "", "required": true }
      ]
    },
    {
      "id": "7.2-customer-update-baru-diterima",
      "name": "Customer Update - Ticket Baru Diterima",
      "icon": "📥",
      "description": "Konfirmasi awal kepada customer bahwa laporan sudah diterima dan dibuatkan ticket.",
      "fields": [
        { "id": "ticket-id", "label": "Ticket ID", "type": "text", "placeholder": "TCK-XXXXXXXX", "defaultValue": "", "required": true },
        { "id": "message", "label": "Pesan Customer", "type": "textarea", "placeholder": "Isi pesan...", "defaultValue": "Baik Bapak/Ibu, laporan sudah kami terima dan sudah dibuatkan ticket.\nSaat ini kami sedang melakukan pengecekan awal terhadap kendala tersebut. Kami akan update kembali setelah ada hasil pemeriksaan dari tim kami.", "required": true }
      ]
    },
    {
      "id": "7.3-customer-update-meminta-data",
      "name": "Customer Update - Meminta Data Tambahan",
      "icon": "❓",
      "description": "Meminta data tambahan spesifik kepada customer agar validasi awal tidak mentah.",
      "fields": [
        { "id": "ticket-id", "label": "Ticket ID", "type": "text", "placeholder": "TCK-XXXXXXXX", "defaultValue": "", "required": true },
        { "id": "message", "label": "Pesan Customer", "type": "textarea", "placeholder": "Isi pesan...", "defaultValue": "Untuk membantu proses pengecekan, mohon dapat dikirimkan informasi berikut:\n- IP/hostname/domain yang bermasalah:\n- Waktu kejadian:\n- Screenshot atau error message:\n- Apakah kendala terjadi dari semua koneksi atau hanya lokasi tertentu:\n- Impact yang dirasakan dari sisi layanan:\nSetelah data kami terima, kami akan lanjutkan pengecekan.", "required": true }
      ]
    },
    {
      "id": "7.4-customer-update-dieskalasikan",
      "name": "Customer Update - Issue Dieskalasikan",
      "icon": "⬆️",
      "description": "Memberi tahu customer bahwa issue sudah melewati validasi awal dan diteruskan ke tim teknis.",
      "fields": [
        { "id": "ticket-id", "label": "Ticket ID", "type": "text", "placeholder": "TCK-XXXXXXXX", "defaultValue": "", "required": true },
        { "id": "message", "label": "Pesan Customer", "type": "textarea", "placeholder": "Isi pesan...", "defaultValue": "Issue sudah kami eskalasikan ke tim teknis untuk pengecekan lebih lanjut.\nSaat ini tim terkait sedang melakukan pemeriksaan pada layanan yang terdampak. Kami akan update kembali setelah ada hasil pengecekan atau tindakan lanjutan.", "required": true }
      ]
    },
    {
      "id": "7.5-customer-update-overnight",
      "name": "Customer Update - Non-Critical Overnight",
      "icon": "🌙",
      "description": "Update aman malam hari untuk issue Sev 3/Sev 4 di luar jam coverage teknis penuh.",
      "fields": [
        { "id": "ticket-id", "label": "Ticket ID", "type": "text", "placeholder": "TCK-XXXXXXXX", "defaultValue": "", "required": true },
        { "id": "message", "label": "Pesan Customer", "type": "textarea", "placeholder": "Isi pesan...", "defaultValue": "Laporan sudah kami terima dan sudah tercatat dalam ticket.\nBerdasarkan pengecekan awal, issue ini belum terindikasi sebagai gangguan critical. Tim teknis akan menindaklanjuti pada jam operasional berikutnya.\nJika terdapat perubahan impact atau layanan menjadi tidak dapat digunakan sama sekali, mohon segera informasikan kepada kami melalui ticket ini.", "required": true }
      ]
    },
    {
      "id": "7.6-customer-update-selesai",
      "name": "Customer Update - Issue Selesai",
      "icon": "✅",
      "description": "Menginformasikan bahwa issue sudah ditangani dan meminta customer melakukan validasi.",
      "fields": [
        { "id": "ticket-id", "label": "Ticket ID", "type": "text", "placeholder": "TCK-XXXXXXXX", "defaultValue": "", "required": true },
        { "id": "message", "label": "Pesan Customer", "type": "textarea", "placeholder": "Isi pesan...", "defaultValue": "Berdasarkan hasil pengecekan, issue sudah ditangani dan layanan terpantau normal kembali.\nMohon dapat dilakukan pengecekan kembali dari sisi Bapak/Ibu. Jika masih terdapat kendala, silakan informasikan kepada kami melalui ticket ini.", "required": true }
      ]
    },
    {
      "id": "7.7-escalation-umum",
      "name": "Escalation Umum",
      "icon": "📢",
      "description": "Format dasar untuk menaikkan issue ke level berikutnya dengan data minimum.",
      "fields": [
        { "id": "ticket-id", "label": "Ticket ID", "type": "text", "placeholder": "TCK-XXXXXXXX", "defaultValue": "", "required": true },
        { "id": "severity", "label": "Severity", "type": "select", "options": ["Sev 1", "Sev 2", "Sev 3", "Sev 4"], "defaultValue": "Sev 3", "required": true },
        { "id": "customer", "label": "Customer", "type": "text", "placeholder": "Nama Customer", "defaultValue": "", "required": true },
        { "id": "service-vm-ip-domain", "label": "Service/VM/IP/Domain", "type": "text", "placeholder": "VM/IP Affected", "defaultValue": "", "required": true },
        { "id": "issue", "label": "Issue", "type": "textarea", "placeholder": "Ringkasan masalah...", "defaultValue": "", "required": true },
        { "id": "impact", "label": "Impact", "type": "textarea", "placeholder": "Dampak teknis/bisnis...", "defaultValue": "", "required": true },
        { "id": "time-detected", "label": "Time Detected", "type": "text", "placeholder": "Waktu terdeteksi", "defaultValue": "", "required": true },
        { "id": "already-checked", "label": "Already Checked", "type": "textarea", "placeholder": "Pengecekan yang sudah dilakukan...", "defaultValue": "", "required": true },
        { "id": "result", "label": "Result", "type": "textarea", "placeholder": "Hasil pengecekan...", "defaultValue": "", "required": true },
        { "id": "current-status", "label": "Current Status", "type": "text", "placeholder": "Status saat ini...", "defaultValue": "", "required": true },
        { "id": "need-from-next-level", "label": "Need from Next Level", "type": "textarea", "placeholder": "Permintaan spesifik ke level berikutnya...", "defaultValue": "", "required": true }
      ]
    },
    {
      "id": "7.8-escalation-coe1-coe2",
      "name": "Escalation COE-I ke COE-II",
      "icon": "⚡",
      "description": "Eskalasi dari frontline (COE-I) ke technical operator utama (COE-II) dengan data triage awal.",
      "fields": [
        { "id": "ticket-id", "label": "Ticket ID", "type": "text", "placeholder": "TCK-XXXXXXXX", "defaultValue": "", "required": true },
        { "id": "severity", "label": "Severity", "type": "select", "options": ["Sev 1", "Sev 2", "Sev 3", "Sev 4"], "defaultValue": "Sev 3", "required": true },
        { "id": "customer", "label": "Customer", "type": "text", "placeholder": "Nama Customer", "defaultValue": "", "required": true },
        { "id": "service-vm-ip-domain", "label": "Service/VM/IP/Domain", "type": "text", "placeholder": "VM-APP-02/203.0.113.20", "defaultValue": "", "required": true },
        { "id": "issue", "label": "ISSUE", "type": "textarea", "placeholder": "Masalah utama...", "defaultValue": "", "required": true },
        { "id": "impact", "label": "IMPACT", "type": "textarea", "placeholder": "Dampak ke customer...", "defaultValue": "", "required": true },
        { "id": "time-detected", "label": "Time Detected", "type": "text", "placeholder": "Waktu kejadian", "defaultValue": "", "required": true },
        { "id": "ping", "label": "Initial Check - Ping", "type": "text", "placeholder": "Hasil ping...", "defaultValue": "", "required": true },
        { "id": "traceroute", "label": "Initial Check - Traceroute", "type": "text", "placeholder": "Hasil traceroute...", "defaultValue": "", "required": true },
        { "id": "dns", "label": "Initial Check - DNS", "type": "text", "placeholder": "Hasil DNS resolve...", "defaultValue": "", "required": true },
        { "id": "monitoring", "label": "Initial Check - Monitoring", "type": "text", "placeholder": "Status alert monitoring...", "defaultValue": "", "required": true },
        { "id": "customer-evidence", "label": "Initial Check - Customer Evidence", "type": "text", "placeholder": "Bukti screenshot/log customer...", "defaultValue": "", "required": true },
        { "id": "current-status", "label": "Current Status", "type": "text", "placeholder": "Status terakhir...", "defaultValue": "", "required": true },
        { "id": "need-from-coe2", "label": "NEED FROM COE-II", "type": "textarea", "placeholder": "Aksi spesifik yang diminta ke COE-II...", "defaultValue": "", "required": true }
      ]
    },
    {
      "id": "7.9-escalation-coe2-senior",
      "name": "Escalation COE-II ke Senior COE",
      "icon": "⚠️",
      "description": "Eskalasi issue kompleks, menyentuh core infra, atau berisiko downtime luas ke Senior COE.",
      "fields": [
        { "id": "ticket-id", "label": "Ticket ID", "type": "text", "placeholder": "TCK-XXXXXXXX", "defaultValue": "", "required": true },
        { "id": "severity", "label": "Severity", "type": "select", "options": ["Sev 1", "Sev 2", "Sev 3", "Sev 4"], "defaultValue": "Sev 2", "required": true },
        { "id": "scope", "label": "Scope", "type": "text", "placeholder": "Cakupan node/cluster terdampak...", "defaultValue": "", "required": true },
        { "id": "affected-customer", "label": "Affected Customer/Service", "type": "text", "placeholder": "Daftar customer terdampak...", "defaultValue": "", "required": true },
        { "id": "issue-summary", "label": "Issue Summary", "type": "textarea", "placeholder": "Ringkasan analisis teknis...", "defaultValue": "", "required": true },
        { "id": "impact", "label": "Impact", "type": "textarea", "placeholder": "Dampak operasional...", "defaultValue": "", "required": true },
        { "id": "timeline", "label": "Timeline", "type": "textarea", "placeholder": "Urutan waktu singkat kejadian...", "defaultValue": "10:12 alert\n10:20 COE-II validasi", "required": true },
        { "id": "coe1-initial-check", "label": "COE-I Initial Check", "type": "textarea", "placeholder": "Data dari COE-I...", "defaultValue": "", "required": true },
        { "id": "coe2-technical-check", "label": "COE-II Technical Check", "type": "textarea", "placeholder": "Temuan teknis COE-II...", "defaultValue": "", "required": true },
        { "id": "action-taken", "label": "Action Taken", "type": "textarea", "placeholder": "Tindakan yang sudah dicoba...", "defaultValue": "", "required": true },
        { "id": "result", "label": "Result", "type": "textarea", "placeholder": "Hasil tindakan...", "defaultValue": "", "required": true },
        { "id": "suspected-cause", "label": "Suspected Cause", "type": "text", "placeholder": "Dugaan sementara penyebab...", "defaultValue": "", "required": true },
        { "id": "risk", "label": "Risk", "type": "textarea", "placeholder": "Risiko jika tindakan salah...", "defaultValue": "", "required": true },
        { "id": "need-from-senior-coe", "label": "Need from Senior COE", "type": "textarea", "placeholder": "Arahan/mitigasi yang diharapkan...", "defaultValue": "", "required": true }
      ]
    },
    {
      "id": "7.10-founder-escalation",
      "name": "Founder Escalation",
      "icon": "👑",
      "description": "Menyajikan paket keputusan (decision package) ke Founder/Management untuk insiden major.",
      "fields": [
        { "id": "ticket-id", "label": "Incident ID", "type": "text", "placeholder": "INC-XXXXXXXX", "defaultValue": "", "required": true },
        { "id": "severity", "label": "Severity", "type": "select", "options": ["Sev 1", "Sev 2", "Sev 3", "Sev 4"], "defaultValue": "Sev 1", "required": true },
        { "id": "scope", "label": "Scope", "type": "text", "placeholder": "Cakupan dampak...", "defaultValue": "", "required": true },
        { "id": "business-impact", "label": "Business Impact", "type": "textarea", "placeholder": "Dampak reputasi, SLA, bisnis...", "defaultValue": "", "required": true },
        { "id": "technical-summary", "label": "Technical Summary", "type": "textarea", "placeholder": "Ringkasan teknis sangat singkat...", "defaultValue": "", "required": true },
        { "id": "action-taken", "label": "Action Taken", "type": "textarea", "placeholder": "Tindakan pengamanan saat ini...", "defaultValue": "", "required": true },
        { "id": "current-risk", "label": "Current Risk", "type": "textarea", "placeholder": "Risiko krusial saat ini...", "defaultValue": "", "required": true },
        { "id": "decision-needed", "label": "Decision Needed", "type": "text", "placeholder": "Keputusan/Approval apa yang dicari...", "defaultValue": "", "required": true },
        { "id": "options", "label": "Options", "type": "textarea", "placeholder": "Pilihan A (risiko), Pilihan B (risiko)...", "defaultValue": "A. \nB. ", "required": true },
        { "id": "recommendation", "label": "Recommendation", "type": "textarea", "placeholder": "Rekomendasi teknis dari tim operasi...", "defaultValue": "", "required": true }
      ]
    },
    {
      "id": "7.11-shift-handoff",
      "name": "Shift Handoff",
      "icon": "🔄",
      "description": "Memastikan issue pending diteruskan ke shift berikutnya tanpa pengulangan diagnosa.",
      "fields": [
        { "id": "ticket-id", "label": "Ticket ID", "type": "text", "placeholder": "TCK-XXXXXXXX", "defaultValue": "", "required": true },
        { "id": "severity", "label": "Severity", "type": "select", "options": ["Sev 1", "Sev 2", "Sev 3", "Sev 4"], "defaultValue": "Sev 3", "required": true },
        { "id": "customer", "label": "Customer", "type": "text", "placeholder": "Nama Customer", "defaultValue": "", "required": true },
        { "id": "issue", "label": "Issue", "type": "textarea", "placeholder": "Masalah tertunda...", "defaultValue": "", "required": true },
        { "id": "impact", "label": "Impact", "type": "textarea", "placeholder": "Dampak saat ini...", "defaultValue": "", "required": true },
        { "id": "already-checked", "label": "Already Checked", "type": "textarea", "placeholder": "Yang sudah dikerjakan shift sebelumnya...", "defaultValue": "", "required": true },
        { "id": "current-status", "label": "Current Status", "type": "text", "placeholder": "Status terakhir internal...", "defaultValue": "", "required": true },
        { "id": "next-action", "label": "Next Action", "type": "textarea", "placeholder": "Langkah yang harus dilakukan shift baru...", "defaultValue": "", "required": true },
        { "id": "owner", "label": "Next Owner", "type": "text", "placeholder": "Nama PIC shift baru...", "defaultValue": "", "required": true },
        { "id": "follow-up-time", "label": "Follow-up Time", "type": "text", "placeholder": "Target waktu follow-up...", "defaultValue": "", "required": true },
        { "id": "notes", "label": "Notes", "type": "textarea", "placeholder": "Catatan tambahan khusus...", "defaultValue": "", "required": false }
      ]
    },
    {
      "id": "7.12-coe2-update-to-coe1",
      "name": "COE-II Technical Update ke COE-I",
      "icon": "🗣️",
      "description": "Bahan update teknis dari COE-II agar COE-I bisa menerjemahkannya ke customer.",
      "fields": [
        { "id": "ticket-id", "label": "Ticket ID", "type": "text", "placeholder": "TCK-XXXXXXXX", "defaultValue": "", "required": true },
        { "id": "current-status", "label": "Current Status", "type": "text", "placeholder": "Status teknis layanan...", "defaultValue": "", "required": true },
        { "id": "technical-finding", "label": "Technical Finding", "type": "textarea", "placeholder": "Temuan teknis di lapangan...", "defaultValue": "", "required": true },
        { "id": "action-taken", "label": "Action Taken", "type": "textarea", "placeholder": "Tindakan perbaikan yang dilakukan...", "defaultValue": "", "required": true },
        { "id": "result", "label": "Result", "type": "textarea", "placeholder": "Hasil setelah tindakan...", "defaultValue": "", "required": true },
        { "id": "customer-action-needed", "label": "Customer Action Needed", "type": "textarea", "placeholder": "Aksi yang perlu dilakukan customer...", "defaultValue": "", "required": false },
        { "id": "next-action", "label": "Next Action", "type": "text", "placeholder": "Langkah monitoring internal...", "defaultValue": "", "required": true },
        { "id": "next-update-time", "label": "Next Update Time", "type": "text", "placeholder": "Waktu update berkala selanjutnya...", "defaultValue": "", "required": true }
      ]
    },
    {
      "id": "7.13-daily-ops-summary",
      "name": "Daily Ops Summary",
      "icon": "📊",
      "description": "Visibility harian untuk management mengenai kondisi tiket aktif, aging, dan kebutuhan eskalasi.",
      "fields": [
        { "id": "date", "label": "Date", "type": "text", "placeholder": "DD/MM/YYYY", "defaultValue": "", "required": true },
        { "id": "coordinator", "label": "Coordinator", "type": "text", "placeholder": "Nama Coordinator", "defaultValue": "", "required": true },
        { "id": "open-critical-issue", "label": "1. Open Critical Issue (Ticket/Incident ID)", "type": "textarea", "placeholder": "Daftar Sev 1 / Sev 2 aktif...", "defaultValue": "", "required": true },
        { "id": "overnight-issue", "label": "2. Overnight Issue (Ticket ID)", "type": "textarea", "placeholder": "Tiket malam masuk penanganan pagi...", "defaultValue": "", "required": true },
        { "id": "ticket-aging", "label": "3. Ticket Aging (Ticket ID)", "type": "textarea", "placeholder": "Tiket stuck/tanpa update...", "defaultValue": "", "required": true },
        { "id": "pending-escalation", "label": "4. Pending Escalation (Ticket ID)", "type": "textarea", "placeholder": "Eskalasi menunggu level di atasnya...", "defaultValue": "", "required": true },
        { "id": "datacenter-pending", "label": "5. Provisioning / Datacenter Pending (Task ID)", "type": "textarea", "placeholder": "Pekerjaan fisik belum selesai...", "defaultValue": "", "required": true },
        { "id": "no-owner", "label": "6. Issue Without Clear Owner (Ticket ID)", "type": "textarea", "placeholder": "Tiket tanpa owner yang jelas...", "defaultValue": "", "required": true },
        { "id": "founder-attention", "label": "7. Need Founder Attention", "type": "textarea", "placeholder": "Hal yang butuh keputusan manajemen...", "defaultValue": "", "required": true },
        { "id": "notes", "label": "8. Notes", "type": "textarea", "placeholder": "Rekomendasi runbook / catatan lainnya...", "defaultValue": "", "required": false }
      ]
    },
    {
      "id": "7.14-datacenter-check-request",
      "name": "Datacenter Check Request",
      "icon": "🔌",
      "description": "Instruksi pengecekan infrastruktur fisik ke teknisi datacenter agar tidak ambigu.",
      "fields": [
        { "id": "ticket-id", "label": "Task/Ticket ID", "type": "text", "placeholder": "TCK-XXXXXXXX", "defaultValue": "", "required": true },
        { "id": "device-server", "label": "Device/Server", "type": "text", "placeholder": "MXC-NODE-XX", "defaultValue": "", "required": true },
        { "id": "location-rack", "label": "Location/Rack", "type": "text", "placeholder": "Rack X/Unit Y", "defaultValue": "", "required": true },
        { "id": "reason", "label": "Reason", "type": "textarea", "placeholder": "Alasan perlunya pengecekan fisik...", "defaultValue": "", "required": true },
        { "id": "checklist", "label": "Checklist Instruksi", "type": "textarea", "placeholder": "1. Cek LED...\n2. Cek kabel...", "defaultValue": "1. \n2. \n3. ", "required": true },
        { "id": "evidence-needed", "label": "Evidence Needed", "type": "textarea", "placeholder": "- Photo:\n- Console:\n- LED:\n- IPMI:", "defaultValue": "- Photo: \n- Console: \n- LED: \n- IPMI: ", "required": true },
        { "id": "allowed-action", "label": "Allowed Action", "type": "text", "placeholder": "Tindakan yang diperbolehkan...", "defaultValue": "", "required": true },
        { "id": "not-allowed", "label": "Not Allowed", "type": "text", "placeholder": "Tindakan keras dilarang...", "defaultValue": "", "required": true },
        { "id": "expected-report", "label": "Expected Report", "type": "text", "placeholder": "Format laporan balik...", "defaultValue": "Balas menggunakan format Datacenter Check Result dengan foto.", "required": true }
      ]
    },
    {
      "id": "7.15-datacenter-check-result",
      "name": "Datacenter Check Result",
      "icon": "📸",
      "description": "Laporan dari teknisi datacenter ke COE-II berbasis bukti fisik (evidence).",
      "fields": [
        { "id": "ticket-id", "label": "Task/Ticket ID", "type": "text", "placeholder": "TCK-XXXXXXXX", "defaultValue": "", "required": true },
        { "id": "device-server", "label": "Device/Server", "type": "text", "placeholder": "MXC-NODE-XX", "defaultValue": "", "required": true },
        { "id": "location-rack", "label": "Location/Rack", "type": "text", "placeholder": "Rack X/Unit Y", "defaultValue": "", "required": true },
        { "id": "check-performed", "label": "Check Performed", "type": "textarea", "placeholder": "Pengecekan yang telah dilakukan...", "defaultValue": "", "required": true },
        { "id": "result", "label": "Result", "type": "textarea", "placeholder": "Hasil temuan fisik di lapangan...", "defaultValue": "", "required": true },
        { "id": "evidence", "label": "Evidence", "type": "text", "placeholder": "Lampiran dokumen foto/catatan panel...", "defaultValue": "Foto terlampir di ticket.", "required": true },
        { "id": "action-taken", "label": "Action Taken", "type": "textarea", "placeholder": "Tindakan fisik yang dilakukan...", "defaultValue": "", "required": true },
        { "id": "current-status", "label": "Current Status", "type": "text", "placeholder": "Status perangkat setelah tindakan...", "defaultValue": "", "required": true },
        { "id": "need-further-instruction", "label": "Need Further Instruction", "type": "text", "placeholder": "Apakah butuh instruksi lanjutan? (Yes/No)", "defaultValue": "Tidak, menunggu validasi dari monitoring.", "required": true }
      ]
    },
    {
      "id": "7.16-hardware-replacement",
      "name": "Hardware Replacement Report",
      "icon": "💾",
      "description": "Mencatat penggantian komponen perangkat keras demi ketertelusuran inventaris dan audit.",
      "fields": [
        { "id": "ticket-id", "label": "Task/Ticket ID", "type": "text", "placeholder": "TCK-XXXXXXXX", "defaultValue": "", "required": true },
        { "id": "device-server", "label": "Device/Server", "type": "text", "placeholder": "MXC-NODE-XX", "defaultValue": "", "required": true },
        { "id": "component", "label": "Component", "type": "text", "placeholder": "SSD 960GB / RAM / PSU", "defaultValue": "", "required": true },
        { "id": "old-serial", "label": "Old Serial", "type": "text", "placeholder": "S/N lama", "defaultValue": "", "required": true },
        { "id": "new-serial", "label": "New Serial", "type": "text", "placeholder": "S/N baru", "defaultValue": "", "required": true },
        { "id": "location-slot", "label": "Location/Slot", "type": "text", "placeholder": "Disk slot X / DIMM slot Y", "defaultValue": "", "required": true },
        { "id": "time-replaced", "label": "Time Replaced", "type": "text", "placeholder": "DD/MM/YYYY HH:MM WIB", "defaultValue": "", "required": true },
        { "id": "before-status", "label": "Before Status", "type": "textarea", "placeholder": "Kondisi indikator sebelum diganti...", "defaultValue": "", "required": true },
        { "id": "after-status", "label": "After Status", "type": "textarea", "placeholder": "Kondisi setelah diganti...", "defaultValue": "", "required": true },
        { "id": "evidence", "label": "Evidence", "type": "text", "placeholder": "Foto komponen lama & baru terpasang...", "defaultValue": "Foto terlampir.", "required": true },
        { "id": "validated-by", "label": "Validated by", "type": "text", "placeholder": "COE-II: Nama validator teknis", "defaultValue": "", "required": true },
        { "id": "notes", "label": "Notes", "type": "textarea", "placeholder": "Proses sinkronisasi / status rebuild...", "defaultValue": "", "required": false }
      ]
    },
    {
      "id": "7.17-cabling-report",
      "name": "Cabling Report",
      "icon": "🌐",
      "description": "Mencatat pemetaan port baru atau perubahan kabel jaringan demi mempermudah troubleshooting.",
      "fields": [
        { "id": "ticket-id", "label": "Task/Ticket ID", "type": "text", "placeholder": "TCK-XXXXXXXX", "defaultValue": "", "required": true },
        { "id": "device-server", "label": "Device/Server", "type": "text", "placeholder": "MXC-NODE-XX", "defaultValue": "", "required": true },
        { "id": "rack", "label": "Rack", "type": "text", "placeholder": "Rack X", "defaultValue": "", "required": true },
        { "id": "source-port", "label": "Source Port", "type": "text", "placeholder": "Server NIC1", "defaultValue": "", "required": true },
        { "id": "destination-port", "label": "Destination Port", "type": "text", "placeholder": "SW-XX-XX Port X", "defaultValue": "", "required": true },
        { "id": "cable-label", "label": "Cable Label", "type": "text", "placeholder": "Format label kabel...", "defaultValue": "", "required": true },
        { "id": "link-status", "label": "Link Status", "type": "text", "placeholder": "Up / LED Hijau", "defaultValue": "", "required": true },
        { "id": "photo-evidence", "label": "Photo Evidence", "type": "text", "placeholder": "Foto port & labeling terpasang...", "defaultValue": "Foto terlampir.", "required": true },
        { "id": "notes", "label": "Notes", "type": "textarea", "placeholder": "Catatan jalur perapian kabel...", "defaultValue": "", "required": false }
      ]
    },
    {
      "id": "7.18-senior-coe-update",
      "name": "Senior COE Update",
      "icon": "🧠",
      "description": "Pemberian update berkala dari Senior COE saat menangani major incident agar alur koordinasi terjaga.",
      "fields": [
        { "id": "ticket-id", "label": "Ticket/Incident ID", "type": "text", "placeholder": "INC-XXXXXXXX", "defaultValue": "", "required": true },
        { "id": "current-finding", "label": "Current Finding", "type": "textarea", "placeholder": "Temuan mendalam saat ini...", "defaultValue": "", "required": true },
        { "id": "action-taken", "label": "Action Taken", "type": "textarea", "placeholder": "Tindakan mitigasi tingkat lanjut...", "defaultValue": "", "required": true },
        { "id": "current-risk", "label": "Current Risk", "type": "textarea", "placeholder": "Risiko dari langkah penanganan...", "defaultValue": "", "required": true },
        { "id": "next-action", "label": "Next Action", "type": "textarea", "placeholder": "Rencana teknis langkah berikutnya...", "defaultValue": "", "required": true },
        { "id": "need-from-coe2", "label": "Need from COE-II", "type": "textarea", "placeholder": "Bantuan spesifik yang dibutuhkan dari operator...", "defaultValue": "", "required": false },
        { "id": "need-customer-update", "label": "Need Customer Update", "type": "select", "options": ["Yes", "No"], "defaultValue": "Yes", "required": true },
        { "id": "next-review-time", "label": "Next Review Time", "type": "text", "placeholder": "Waktu evaluasi teknis berikutnya...", "defaultValue": "", "required": true }
      ]
    },
    {
      "id": "7.19-rca-report",
      "name": "Root Cause Analysis (RCA) Report",
      "icon": "📝",
      "description": "Dokumentasi insiden pasca-kejadian (post-mortem) untuk mencegah kendala berulang kembali di masa depan.",
      "fields": [
        { "id": "ticket-id", "label": "Incident ID", "type": "text", "placeholder": "INC-XXXXXXXX", "defaultValue": "", "required": true },
        { "id": "incident", "label": "Incident Title", "type": "text", "placeholder": "Judul Kejadian Insiden", "defaultValue": "", "required": true },
        { "id": "date-time", "label": "Date/Time & Duration", "type": "text", "placeholder": "01/07/2026 10:12-12:05 WIB", "defaultValue": "", "required": true },
        { "id": "severity", "label": "Severity", "type": "select", "options": ["Sev 1", "Sev 2", "Sev 3", "Sev 4"], "defaultValue": "Sev 1", "required": true },
        { "id": "impact", "label": "Impact Summary", "type": "textarea", "placeholder": "Dampak utama insiden...", "defaultValue": "", "required": true },
        { "id": "affected-service", "label": "Affected Service/Customer", "type": "textarea", "placeholder": "Layanan/customer yang terdampak...", "defaultValue": "", "required": true },
        { "id": "timeline", "label": "Timeline Kejadian", "type": "textarea", "placeholder": "Urutan waktu deteksi, mitigasi, hingga resolusi...", "defaultValue": "- 10:12 WIB: \n- 10:25 WIB: \n- 12:05 WIB: ", "required": true },
        { "id": "root-cause", "label": "Root Cause", "type": "textarea", "placeholder": "Penyebab utama dari insiden...", "defaultValue": "", "required": true },
        { "id": "trigger", "label": "Trigger", "type": "textarea", "placeholder": "Pemicu langsung awal insiden...", "defaultValue": "", "required": true },
        { "id": "detection", "label": "Detection", "type": "text", "placeholder": "Bagaimana kendala terdeteksi...", "defaultValue": "", "required": true },
        { "id": "action-taken", "label": "Action Taken", "type": "textarea", "placeholder": "Langkah pemulihan yang dilakukan...", "defaultValue": "", "required": true },
        { "id": "what-went-well", "label": "What Went Well", "type": "textarea", "placeholder": "Poin positif penanganan...", "defaultValue": "", "required": true },
        { "id": "what-went-wrong", "label": "What Went Wrong", "type": "textarea", "placeholder": "Evaluasi kekurangan penanganan...", "defaultValue": "", "required": true },
        { "id": "prevention", "label": "Prevention", "type": "textarea", "placeholder": "Rencana aksi pencegahan jangka panjang...", "defaultValue": "", "required": true },
        { "id": "runbook-update-needed", "label": "Runbook Update Needed", "type": "select", "options": ["Yes", "No"], "defaultValue": "Yes", "required": true },
        { "id": "monitoring-update-needed", "label": "Monitoring Update Needed", "type": "select", "options": ["Yes", "No"], "defaultValue": "Yes", "required": true },
        { "id": "automation-needed", "label": "Automation Needed", "type": "select", "options": ["Yes", "No"], "defaultValue": "Yes", "required": true },
        { "id": "owner", "label": "Improvement Owner", "type": "text", "placeholder": "PIC Penanggung jawab perbaikan", "defaultValue": "", "required": true },
        { "id": "due-date", "label": "Due Date", "type": "text", "placeholder": "Target penyelesaian (DD/MM/YYYY)", "defaultValue": "", "required": true }
      ]
    },
    {
      "id": "7.20-technical-note",
      "name": "Technical Note",
      "icon": "📓",
      "description": "Dokumentasi temuan teknis kecil atau trik workaround sebagai sarana transfer knowledge internal.",
      "fields": [
        { "id": "ticket-id", "label": "Related Ticket ID", "type": "text", "placeholder": "TCK-XXXXXXXX", "defaultValue": "", "required": false },
        { "id": "topic", "label": "Topic", "type": "text", "placeholder": "Judul Topik Teknis", "defaultValue": "", "required": true },
        { "id": "problem", "label": "Problem", "type": "textarea", "placeholder": "Masalah operasional yang ditemui...", "defaultValue": "", "required": true },
        { "id": "finding", "label": "Finding", "type": "textarea", "placeholder": "Analisis temuan sistem...", "defaultValue": "", "required": true },
        { "id": "fix-workaround", "label": "Fix/Workaround", "type": "textarea", "placeholder": "Langkah pemecahan aman...", "defaultValue": "", "required": true },
        { "id": "risk", "label": "Risk", "type": "textarea", "placeholder": "Risiko saat eksekusi perbaikan...", "defaultValue": "", "required": true },
        { "id": "recommended-future-action", "label": "Recommended Future Action", "type": "textarea", "placeholder": "Rekomendasi pencegahan ke depan...", "defaultValue": "", "required": true },
        { "id": "can-handled-by", "label": "Can be handled by", "type": "text", "placeholder": "Role minimal yang bisa menangani ini...", "defaultValue": "", "required": true },
        { "id": "runbook-needed", "label": "Runbook Needed", "type": "select", "options": ["Yes", "No"], "defaultValue": "Yes", "required": true }
      ]
    },
    {
      "id": "7.21-escalation-to-developer",
      "name": "Escalation ke Developer",
      "icon": "👨‍💻",
      "description": "Formulir eskalasi kendala teknis, bug aplikasi, atau issue kueri database yang membutuhkan penanganan langsung dari divisi Developer.",
      "fields": [
        { "id": "ticket-id", "label": "Ticket ID", "type": "text", "placeholder": "TCK-XXXXXXXX", "defaultValue": "", "required": true },
        { "id": "severity", "label": "Severity Level", "type": "select", "options": ["High (SLA < 2 Jam)", "Medium (SLA < 8 Jam)", "Low (SLA Non-Urgent)"], "defaultValue": "Medium", "required": true },
        { "id": "customer", "label": "Customer / Klien", "type": "text", "placeholder": "Nama Perusahaan / Client", "defaultValue": "", "required": true },
        { "id": "environment", "label": "Environment", "type": "select", "options": ["Production", "Staging", "Development"], "defaultValue": "Production", "required": true },
        { "id": "impacted-component", "label": "Komponen Terdampak", "type": "text", "placeholder": "e.g. API Gateway, Auth Service, Frontend App, Cron Job", "defaultValue": "", "required": true },
        { "id": "issue-summary", "label": "Ringkasan Masalah", "type": "textarea", "placeholder": "Jelaskan kendala atau error yang terjadi secara singkat...", "defaultValue": "", "required": true },
        { "id": "steps-to-reproduce", "label": "Langkah Reproduksi Error", "type": "textarea", "placeholder": "1. Akses endpoint...\n2. Masukkan payload...\n3. Muncul error response...", "defaultValue": "1. \n2. \n3. ", "required": true },
        { "id": "technical-findings", "label": "Temuan Teknis & Log", "type": "textarea", "placeholder": "Tempel potongan log error, stack trace, status code HTTP, atau kueri database yang bermasalah di sini...", "defaultValue": "", "required": true },
        { "id": "evidence", "label": "Evidence / Bukti", "type": "text", "placeholder": "Link / Lampiran screenshot error, response Postman, atau payload", "defaultValue": "Terlampir di ticket.", "required": true },
        { "id": "temporary-workaround", "label": "Workaround Sementara (Jika Ada)", "type": "textarea", "placeholder": "Langkah sementara yang diambil oleh tim ops untuk memitigasi dampak ke user (misal restart service, bypass route)...", "defaultValue": "", "required": false },
        { "id": "need-from-developer", "label": "Kebutuhan dari Developer", "type": "textarea", "placeholder": "Aksi spesifik yang diminta (misal: hotfix bug, perbaikan kueri lambat, investigasi memory leak)...", "defaultValue": "", "required": true },
        { "id": "escalated-by", "label": "Eskalator (PIC Ops)", "type": "text", "placeholder": "Nama & Role PIC internal (e.g. COE-II / Senior COE)", "defaultValue": "", "required": true }
      ]
    },
    {
      "id": "7.22-infrastructure-failure",
      "name": "Infrastructure Failure",
      "icon": " infrastructure-failure",
      "description": "Formulir eskalasi kendala teknis, bug aplikasi, atau issue kueri database yang membutuhkan penanganan langsung dari divisi Developer.",
      "fields": [
        { "id": "ticket-id", "label": "Ticket ID", "type": "text", "placeholder": "TCK-XXXXXXXX", "defaultValue": "", "required": true },
        { "id": "severity", "label": "Severity Level", "type": "select", "options": ["High (SLA < 2 Jam)", "Medium (SLA < 8 Jam)", "Low (SLA Non-Urgent)"], "defaultValue": "Medium", "required": true },
        { "id": "customer", "label": "Customer / Klien", "type": "text", "placeholder": "Nama Perusahaan / Client", "defaultValue": "", "required": true },
        { "id": "environment", "label": "Environment", "type": "select", "options": ["Production", "Staging", "Development"], "defaultValue": "Production", "required": true },
        { "id": "impacted-component", "label": "Komponen Terdampak", "type": "text", "placeholder": "e.g. API Gateway, Auth Service, Frontend App, Cron Job", "defaultValue": "", "required": true },
        { "id": "issue-summary", "label": "Ringkasan Masalah", "type": "textarea", "placeholder": "Jelaskan kendala atau error yang terjadi secara singkat...", "defaultValue": "", "required": true },
        { "id": "steps-to-reproduce", "label": "Langkah Reproduksi Error", "type": "textarea", "placeholder": "1. Akses endpoint...\n2. Masukkan payload...\n3. Muncul error response...", "defaultValue": "1. \n2. \n3. ", "required": true },
        { "id": "technical-findings", "label": "Temuan Teknis & Log", "type": "textarea", "placeholder": "Tempel potongan log error, stack trace, status code HTTP, atau kueri database yang bermasalah di sini...", "defaultValue": "", "required": true },
        { "id": "evidence", "label": "Evidence / Bukti", "type": "text", "placeholder": "Link / Lampiran screenshot error, response Postman, atau payload", "defaultValue": "Terlampir di ticket.", "required": true },
        { "id": "temporary-workaround", "label": "Workaround Sementara (Jika Ada)", "type": "textarea", "placeholder": "Langkah sementara yang diambil oleh tim ops untuk memitigasi dampak ke user (misal restart service, bypass route)...", "defaultValue": "", "required": false },
        { "id": "need-from-developer", "label": "Kebutuhan dari Developer", "type": "textarea", "placeholder": "Aksi spesifik yang diminta (misal: hotfix bug, perbaikan kueri lambat, investigasi memory leak)...", "defaultValue": "", "required": true },
        { "id": "escalated-by", "label": "Eskalator (PIC Ops)", "type": "text", "placeholder": "Nama & Role PIC internal (e.g. COE-II / Senior COE)", "defaultValue": "", "required": true }
      ]
    }
  ]

// App state
let state = {
  theme: localStorage.getItem('theme') || 'dark',
  templates: [],
  activeTemplateId: localStorage.getItem('activeTemplateId') || 'bug-report',
  activeTab: 'tab-html',
  editingTemplateId: null,
  selectorView: localStorage.getItem('selectorView') || 'grid'
};

// DOM Cache
const dom = {
  html: document.documentElement,
  themeToggleBtn: document.getElementById('btn-theme-toggle'),
  newTemplateBtn: document.getElementById('btn-new-template'),
  templateSelector: document.getElementById('template-selector'),
  dynamicFieldsContainer: document.getElementById('dynamic-fields-container'),
  ticketForm: document.getElementById('ticket-form'),
  rawOutput: document.getElementById('raw-output'),
  copyBtn: document.getElementById('btn-copy'),
  downloadBtn: document.getElementById('btn-download'),
  clearBtn: document.getElementById('btn-clear'),
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toast-message'),
  // Modal DOM elements
  customTemplateModal: document.getElementById('custom-template-modal'),
  customTemplateForm: document.getElementById('custom-template-form'),
  modalFieldsList: document.getElementById('modal-fields-list'),
  addFieldBtn: document.getElementById('btn-add-field'),
  closeModalBtn: document.getElementById('btn-close-modal'),
  cancelModalBtn: document.getElementById('btn-cancel-modal'),
  newTemplateName: document.getElementById('new-template-name'),
  newTemplateIcon: document.getElementById('new-template-icon'),
  newTemplateDesc: document.getElementById('new-template-description'),
  modalTitle: document.getElementById('modal-title'),
  modalSubmitBtn: document.getElementById('btn-submit-modal'),
  confirmModal: document.getElementById('confirm-modal'),
  confirmModalTitle: document.getElementById('confirm-modal-title'),
  confirmModalMessage: document.getElementById('confirm-modal-message'),
  btnCancelConfirm: document.getElementById('btn-cancel-confirm'),
  btnOkConfirm: document.getElementById('btn-ok-confirm'),
  btnCloseConfirm: document.getElementById('btn-close-confirm'),
  templateBanner: document.getElementById('template-description-banner'),
  bannerName: document.getElementById('banner-template-name'),
  bannerDesc: document.getElementById('banner-template-desc'),
  btnViewGrid: document.getElementById('btn-view-grid'),
  btnViewList: document.getElementById('btn-view-list')
};

// Initialize Application
function init() {
  loadTemplates();
  setupTheme();
  renderTemplateSelectors();
  renderForm();
  setupEventListeners();
  updatePreviews();
  lucide.createIcons();
}

// Load default + custom templates from localStorage
function loadTemplates() {
  const hasInitialized = localStorage.getItem('templatesInitialized');

  if (!hasInitialized) {
    // Migration: if they already have custom templates, merge them!
    const legacyCustom = JSON.parse(localStorage.getItem('customTemplates')) || [];
    const initialTemplates = [...DEFAULT_TEMPLATES, ...legacyCustom];
    localStorage.setItem('userTemplates', JSON.stringify(initialTemplates));
    localStorage.setItem('templatesInitialized', 'true');
  }

  // Load from localStorage 'userTemplates'
  state.templates = JSON.parse(localStorage.getItem('userTemplates')) || [];

  // Fallback in case userTemplates is empty
  if (state.templates.length === 0) {
    state.templates = [...DEFAULT_TEMPLATES];
    localStorage.setItem('userTemplates', JSON.stringify(DEFAULT_TEMPLATES));
  }

  // Fallback if active template is not found
  if (!state.templates.some(t => t.id === state.activeTemplateId)) {
    state.activeTemplateId = state.templates[0]?.id || '';
  }
}

// Set up UI theme
function setupTheme() {
  dom.html.setAttribute('data-theme', state.theme);
}

// Toggle Theme
function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  dom.html.setAttribute('data-theme', state.theme);
  localStorage.setItem('theme', state.theme);
}

// Render the selector cards
function renderTemplateSelectors() {
  // Sync layout configuration
  if (state.selectorView === 'list') {
    dom.templateSelector.className = 'template-selector-list';
    if (dom.btnViewList) dom.btnViewList.classList.add('active');
    if (dom.btnViewGrid) dom.btnViewGrid.classList.remove('active');
  } else {
    dom.templateSelector.className = 'template-selector-grid';
    if (dom.btnViewGrid) dom.btnViewGrid.classList.add('active');
    if (dom.btnViewList) dom.btnViewList.classList.remove('active');
  }

  dom.templateSelector.innerHTML = '';

  state.templates.forEach(tpl => {
    const isCustom = !DEFAULT_TEMPLATES.some(d => d.id === tpl.id);

    const card = document.createElement('div');
    card.className = `template-card ${tpl.id === state.activeTemplateId ? 'active' : ''}`;
    card.dataset.id = tpl.id;

    card.innerHTML = `
      <span class="template-card-icon">${tpl.icon}</span>
      <span class="template-card-name">${tpl.name}</span>
      ${isCustom ? '<span class="template-card-badge">Custom</span>' : ''}
      <div class="template-card-actions">
        <button type="button" class="btn-card-action edit-template-btn" data-id="${tpl.id}" title="Edit Template">
          <i data-lucide="edit-3"></i>
        </button>
        ${isCustom ? `
          <button type="button" class="btn-card-action delete-template-btn" data-id="${tpl.id}" title="Delete Custom Template">
            <i data-lucide="trash-2"></i>
          </button>
        ` : ''}
      </div>
    `;

    card.addEventListener('click', (e) => {
      // Don't trigger template selection if clicking the action buttons
      if (e.target.closest('.btn-card-action')) {
        return;
      }

      selectTemplate(tpl.id);
    });

    const editBtn = card.querySelector('.edit-template-btn');
    const deleteBtn = card.querySelector('.delete-template-btn');

    if (editBtn) {
      editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        editCustomTemplate(tpl.id);
      });
    }

    if (deleteBtn) {
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        deleteCustomTemplate(tpl.id);
      });
    }

    dom.templateSelector.appendChild(card);
  });

  lucide.createIcons({ scope: dom.templateSelector });
}

// Custom Confirmation Dialog
function showConfirm(message, onConfirm) {
  dom.confirmModalMessage.textContent = message;

  const handleCancel = () => {
    dom.confirmModal.close();
    cleanup();
  };

  const handleOk = () => {
    dom.confirmModal.close();
    cleanup();
    onConfirm();
  };

  const cleanup = () => {
    dom.btnCancelConfirm.removeEventListener('click', handleCancel);
    dom.btnCloseConfirm.removeEventListener('click', handleCancel);
    dom.btnOkConfirm.removeEventListener('click', handleOk);
  };

  dom.btnCancelConfirm.addEventListener('click', handleCancel);
  dom.btnCloseConfirm.addEventListener('click', handleCancel);
  dom.btnOkConfirm.addEventListener('click', handleOk);

  dom.confirmModal.showModal();
}

// Delete custom template
function deleteCustomTemplate(id) {
  showConfirm('Are you sure you want to delete this custom template?', () => {
    let userTemplates = JSON.parse(localStorage.getItem('userTemplates')) || [];
    userTemplates = userTemplates.filter(t => t.id !== id);
    localStorage.setItem('userTemplates', JSON.stringify(userTemplates));

    showToast('Template deleted successfully', false);

    if (state.activeTemplateId === id) {
      state.activeTemplateId = state.templates[0]?.id || '';
    }

    loadTemplates();
    renderTemplateSelectors();
    renderForm();
    updatePreviews();
  });
}

// Switch selected template
function selectTemplate(id) {
  state.activeTemplateId = id;
  localStorage.setItem('activeTemplateId', id);

  // Update UI active card
  document.querySelectorAll('.template-card').forEach(card => {
    card.classList.toggle('active', card.dataset.id === id);
  });

  renderForm();
  updatePreviews();
}

// Render dynamic form fields based on active template
function renderForm() {
  const tpl = state.templates.find(t => t.id === state.activeTemplateId);
  if (!tpl) return;

  // Render Template Description Banner
  if (tpl.description) {
    dom.bannerName.textContent = tpl.name;
    dom.bannerDesc.textContent = tpl.description;
    dom.templateBanner.classList.remove('hidden');
    lucide.createIcons({ scope: dom.templateBanner });
  } else {
    dom.templateBanner.classList.add('hidden');
  }

  dom.dynamicFieldsContainer.innerHTML = '';

  tpl.fields.forEach(field => {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    const label = document.createElement('label');
    label.className = 'form-label';
    label.setAttribute('for', `field-${field.id}`);
    label.innerHTML = `${field.label} ${field.required ? '<span style="color:var(--danger)">*</span>' : ''}`;

    let input;
    if (field.type === 'textarea') {
      input = document.createElement('textarea');
      input.className = 'form-textarea';
      input.rows = 4;
    } else if (field.type === 'select') {
      input = document.createElement('select');
      input.className = 'form-select';
      field.options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = opt;
        input.appendChild(option);
      });
    } else {
      input = document.createElement('input');
      input.type = 'text';
      input.className = 'form-input';
    }

    input.id = `field-${field.id}`;
    input.name = field.id;
    input.placeholder = field.placeholder || '';
    input.value = field.defaultValue || '';
    input.required = field.required;

    // Auto-resize textarea on typing
    if (field.type === 'textarea') {
      input.addEventListener('input', () => {
        input.style.height = 'auto';
        input.style.height = input.scrollHeight + 'px';
      });
    }

    // Add validation feedback container
    const feedback = document.createElement('div');
    feedback.className = 'input-feedback';
    feedback.id = `feedback-${field.id}`;
    feedback.textContent = `${field.label} is required.`;

    // Event listeners for real-time validation and preview updates
    input.addEventListener('input', () => {
      validateField(input, feedback);
      updatePreviews();
    });

    formGroup.appendChild(label);
    formGroup.appendChild(input);
    formGroup.appendChild(feedback);

    dom.dynamicFieldsContainer.appendChild(formGroup);
  });
}

// Field validation helper
function validateField(input, feedback) {
  if (input.required && !input.value.trim()) {
    input.classList.add('invalid');
    feedback.classList.add('show');
    return false;
  } else {
    input.classList.remove('invalid');
    feedback.classList.remove('show');
    return true;
  }
}

// Validate entire form
function validateForm() {
  let isValid = true;
  const tpl = state.templates.find(t => t.id === state.activeTemplateId);

  tpl.fields.forEach(field => {
    const input = document.getElementById(`field-${field.id}`);
    const feedback = document.getElementById(`feedback-${field.id}`);
    if (input && feedback) {
      const fieldValid = validateField(input, feedback);
      if (!fieldValid) isValid = false;
    }
  });

  return isValid;
}



// Generate Simplified Plain Text
function generatePlainText() {
  const tpl = state.templates.find(t => t.id === state.activeTemplateId);
  if (!tpl) return '';

  const titleVal = document.getElementById('field-title')?.value.trim() || '';
  const cleanName = tpl.name.replace(/template/gi, '').replace(/\s+/g, ' ').trim().toUpperCase();

  let text = `[${cleanName}]${titleVal ? ` ${titleVal}` : ''}\n`;
  text += '='.repeat(text.length - 1) + '\n\n';

  tpl.fields.forEach(field => {
    if (field.id === 'title') return;

    const element = document.getElementById(`field-${field.id}`);
    const val = element ? element.value.trim() : '';

    if (!val && !field.required) return;

    const formattedVal = val || 'Not provided';

    if (field.type === 'textarea') {
      text += `${field.label.toUpperCase()}:\n${formattedVal}\n\n`;
    } else {
      text += `${field.label}: ${formattedVal}\n`;
    }
  });

  return text.trim();
}



// Calculate and update required form fields completion percentage
function updateFormProgress() {
  const tpl = state.templates.find(t => t.id === state.activeTemplateId);
  if (!tpl) return;

  const requiredFields = tpl.fields.filter(f => f.required);
  const totalRequired = requiredFields.length;

  const progressWrapper = document.getElementById('form-progress-wrapper');
  if (!progressWrapper) return;

  if (totalRequired === 0) {
    progressWrapper.classList.add('hidden');
    return;
  }

  progressWrapper.classList.remove('hidden');

  let filledCount = 0;
  requiredFields.forEach(field => {
    const input = document.getElementById(`field-${field.id}`);
    if (input && input.value.trim() !== '') {
      filledCount++;
    }
  });

  const percentage = Math.round((filledCount / totalRequired) * 100);
  const progressBarFill = document.getElementById('progress-bar-fill');
  const progressPercentage = document.getElementById('progress-percentage');

  if (progressBarFill && progressPercentage) {
    progressBarFill.style.width = `${percentage}%`;
    progressPercentage.textContent = `${percentage}%`;

    // Add dynamic colors to progress bar based on completion
    if (percentage < 40) {
      progressBarFill.style.background = 'linear-gradient(to right, #ef4444, #f59e0b)';
    } else if (percentage < 100) {
      progressBarFill.style.background = 'linear-gradient(to right, #f59e0b, var(--accent))';
    } else {
      progressBarFill.style.background = 'linear-gradient(to right, var(--accent), var(--success))';
    }
  }
}

// Update all previews in real time
function updatePreviews() {
  const plainText = generatePlainText();

  // Update Plain Text Preview
  if (dom.rawOutput) {
    dom.rawOutput.textContent = plainText || 'Fill out the form fields to see live preview...';
  }

  // Update Form Completion progress bar
  updateFormProgress();
}

// Event Listeners Setup
function setupEventListeners() {
  // Theme toggle
  dom.themeToggleBtn.addEventListener('click', toggleTheme);

  // Copy to clipboard
  dom.copyBtn.addEventListener('click', () => copyToClipboard());

  // Download to file
  dom.downloadBtn.addEventListener('click', downloadAsFile);

  // Clear inputs
  dom.clearBtn.addEventListener('click', clearFormFields);

  // View switcher
  if (dom.btnViewGrid && dom.btnViewList) {
    dom.btnViewGrid.addEventListener('click', () => {
      state.selectorView = 'grid';
      localStorage.setItem('selectorView', 'grid');
      dom.templateSelector.className = 'template-selector-grid';
      dom.btnViewGrid.classList.add('active');
      dom.btnViewList.classList.remove('active');
    });

    dom.btnViewList.addEventListener('click', () => {
      state.selectorView = 'list';
      localStorage.setItem('selectorView', 'list');
      dom.templateSelector.className = 'template-selector-list';
      dom.btnViewList.classList.add('active');
      dom.btnViewGrid.classList.remove('active');
    });
  }

  // Modal buttons for template editor
  dom.newTemplateBtn.addEventListener('click', openTemplateModal);
  dom.closeModalBtn.addEventListener('click', closeTemplateModal);
  dom.cancelModalBtn.addEventListener('click', closeTemplateModal);
  dom.addFieldBtn.addEventListener('click', () => addFieldRow());
  dom.customTemplateForm.addEventListener('submit', handleSaveCustomTemplate);

  // Close modal when clicking on backdrop
  dom.customTemplateModal.addEventListener('click', (e) => {
    if (e.target === dom.customTemplateModal) {
      closeTemplateModal();
    }
  });

  dom.confirmModal.addEventListener('click', (e) => {
    if (e.target === dom.confirmModal) {
      dom.confirmModal.close();
    }
  });
}

// Copy output to clipboard based on selected format
// Copy output to clipboard (Plain Text format)
function copyToClipboard() {
  if (!validateForm()) {
    showToast('Please fill out all required fields marked with *', true);
    return;
  }

  const content = generatePlainText();

  navigator.clipboard.writeText(content)
    .then(() => {
      showToast('Copied to clipboard!', false);
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
      showToast('Failed to copy. Please copy manually.', true);
    });
}

// Download content as a file (.txt format)
function downloadAsFile() {
  if (!validateForm()) {
    showToast('Please fill out all required fields first', true);
    return;
  }

  const tpl = state.templates.find(t => t.id === state.activeTemplateId);
  const titleVal = document.getElementById('field-title')?.value.trim() || 'ticket';
  const fileName = titleVal.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'ticket';

  const content = generatePlainText();
  const extension = '.txt';
  const mimeType = 'text/plain';

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = `${fileName}${extension}`;
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast(`Downloaded ${fileName}${extension}!`, false);
}

// Reset fields to default values
function clearFormFields() {
  showConfirm('Are you sure you want to clear all input fields?', () => {
    const tpl = state.templates.find(t => t.id === state.activeTemplateId);
    if (!tpl) return;

    tpl.fields.forEach(field => {
      const input = document.getElementById(`field-${field.id}`);
      if (input) {
        input.value = field.defaultValue || '';
        input.classList.remove('invalid');

        // Trigger scroll height reset
        if (field.type === 'textarea') {
          input.style.height = 'auto';
        }
      }

      const feedback = document.getElementById(`feedback-${field.id}`);
      if (feedback) {
        feedback.classList.remove('show');
      }
    });

    updatePreviews();
    showToast('Form fields cleared', false);
  });
}

// Display toast notifications
function showToast(message, isError = false) {
  dom.toastMessage.textContent = message;

  const iconContainer = document.getElementById('toast-icon-container');
  if (isError) {
    dom.toast.style.borderColor = 'var(--danger)';
    dom.toast.style.boxShadow = '0 10px 30px var(--danger-glow)';
    if (iconContainer) {
      iconContainer.innerHTML = '<i data-lucide="alert-circle" class="toast-icon-error"></i>';
    }
  } else {
    dom.toast.style.borderColor = 'var(--accent)';
    dom.toast.style.boxShadow = '0 10px 30px var(--accent-glow)';
    if (iconContainer) {
      iconContainer.innerHTML = '<i data-lucide="check-circle-2" class="toast-icon"></i>';
    }
  }

  if (iconContainer) {
    lucide.createIcons({ scope: iconContainer });
  }

  dom.toast.classList.remove('hidden');
  dom.toast.classList.add('show');

  setTimeout(() => {
    dom.toast.classList.remove('show');
    setTimeout(() => {
      dom.toast.classList.add('hidden');
    }, 300);
  }, 2500);
}

// --- Custom Template Creator Modal Logic ---

function openTemplateModal() {
  state.editingTemplateId = null;
  dom.modalTitle.textContent = 'Create Custom Template';
  dom.modalSubmitBtn.textContent = 'Save Template';

  dom.newTemplateName.value = '';
  dom.newTemplateIcon.value = '📋';
  dom.newTemplateDesc.value = '';
  dom.modalFieldsList.innerHTML = '';

  // Pre-populate with a single title field template default row
  addFieldRow();
  // Focus name field
  dom.customTemplateModal.showModal();
}

function closeTemplateModal() {
  dom.customTemplateModal.close();
  state.editingTemplateId = null;
}

// Edit custom template
function editCustomTemplate(id) {
  const tpl = state.templates.find(t => t.id === id);
  if (!tpl) return;

  state.editingTemplateId = id;
  dom.modalTitle.textContent = 'Edit Custom Template';
  dom.modalSubmitBtn.textContent = 'Update Template';

  dom.newTemplateName.value = tpl.name;
  dom.newTemplateIcon.value = tpl.icon;
  dom.newTemplateDesc.value = tpl.description || '';
  dom.modalFieldsList.innerHTML = '';

  // Populate dynamic fields
  tpl.fields.forEach(field => {
    if (field.id === 'title') return; // Skip title field since it's hardcoded
    addFieldRow(field);
  });

  dom.customTemplateModal.showModal();
}

// Append a dynamic field builder row in the modal
function addFieldRow(fieldData = null) {
  if (fieldData instanceof Event) {
    fieldData = null;
  }
  const fieldItems = dom.modalFieldsList.querySelectorAll('.modal-field-item');
  const fieldIndex = fieldItems.length + 1;
  const rowId = `field-row-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;

  const row = document.createElement('div');
  row.className = 'modal-field-item';
  row.id = rowId;

  const isSelect = fieldData && fieldData.type === 'select';
  const labelVal = fieldData ? fieldData.label : '';
  const typeVal = fieldData ? fieldData.type : 'text';
  const requiredVal = fieldData ? fieldData.required : false;
  const optionsVal = fieldData && fieldData.options ? fieldData.options.join(', ') : '';

  row.innerHTML = `
    <div class="field-item-header">
      <span class="field-item-number">Field #${fieldIndex}</span>
      <button type="button" class="btn-delete-field remove-field-row-btn" title="Remove Field">
        <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
      </button>
    </div>
    
    <div class="field-item-body">
      <div class="field-grid-row">
        <div class="form-group flex-2" style="margin-bottom: 0;">
          <label class="form-label">Field Label *</label>
          <input type="text" class="form-input field-label-input" required placeholder="e.g. System Logs" value="${labelVal}">
        </div>
        <div class="form-group flex-1" style="margin-bottom: 0;">
          <label class="form-label">Field Type</label>
          <select class="form-select field-type-input">
            <option value="text" ${typeVal === 'text' ? 'selected' : ''}>Short Text</option>
            <option value="textarea" ${typeVal === 'textarea' ? 'selected' : ''}>Long Text</option>
            <option value="select" ${typeVal === 'select' ? 'selected' : ''}>Dropdown Choice</option>
          </select>
        </div>
      </div>
      
      <div class="form-group options-container ${isSelect ? '' : 'hidden'}" style="margin-bottom: 0;">
        <label class="form-label">Dropdown Options * <span class="help-text">(comma separated)</span></label>
        <input type="text" class="form-input field-options-input" placeholder="e.g. Web, Android, iOS" value="${optionsVal}" ${isSelect ? 'required' : ''}>
      </div>
      
      <div class="field-item-footer">
        <label class="switch-label">
          <input type="checkbox" class="switch-input field-required-input" ${requiredVal ? 'checked' : ''}>
          <span class="switch-slider"></span>
          <span>Required field</span>
        </label>
      </div>
    </div>
  `;

  // Event listeners inside dynamic row
  const selectType = row.querySelector('.field-type-input');
  const optionsContainer = row.querySelector('.options-container');
  const deleteBtn = row.querySelector('.remove-field-row-btn');

  selectType.addEventListener('change', () => {
    if (selectType.value === 'select') {
      optionsContainer.classList.remove('hidden');
      optionsContainer.querySelector('input').required = true;
    } else {
      optionsContainer.classList.add('hidden');
      optionsContainer.querySelector('input').required = false;
    }
  });

  deleteBtn.addEventListener('click', () => {
    row.remove();
    updateFieldIndexes();
  });

  dom.modalFieldsList.appendChild(row);
  lucide.createIcons({ scope: row });
}

function updateFieldIndexes() {
  const fieldItems = dom.modalFieldsList.querySelectorAll('.modal-field-item');
  fieldItems.forEach((item, index) => {
    const title = item.querySelector('.field-item-number');
    if (title) {
      title.textContent = `Field #${index + 1}`;
    }
  });
}

// Handle Template Saving
function handleSaveCustomTemplate(e) {
  e.preventDefault();

  const name = dom.newTemplateName.value.trim();
  const icon = dom.newTemplateIcon.value.trim() || '📋';
  const desc = dom.newTemplateDesc.value.trim();

  const isEditing = state.editingTemplateId !== null;
  const id = isEditing ? state.editingTemplateId : 'custom-' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  if (!isEditing && state.templates.some(t => t.id === id)) {
    alert('A template with a similar name already exists. Please choose a different name.');
    return;
  }

  // Extract custom fields
  const fieldItems = dom.modalFieldsList.querySelectorAll('.modal-field-item');
  if (fieldItems.length === 0) {
    alert('Please add at least one field to your template.');
    return;
  }

  const customFields = [
    // All templates must have a Ticket Title field
    { id: 'title', label: 'Ticket Title', type: 'text', placeholder: `Title description...`, defaultValue: '', required: true }
  ];

  let valid = true;
  fieldItems.forEach(item => {
    const label = item.querySelector('.field-label-input').value.trim();
    const type = item.querySelector('.field-type-input').value;
    const required = item.querySelector('.field-required-input').checked;

    if (!label) {
      valid = false;
      return;
    }

    const fieldId = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    let fieldObj = {
      id: fieldId,
      label: label,
      type: type,
      placeholder: `Enter ${label.toLowerCase()}...`,
      defaultValue: '',
      required: required
    };

    if (type === 'select') {
      const optsText = item.querySelector('.field-options-input').value.trim();
      if (!optsText) {
        valid = false;
        alert('Please specify choices for dropdown type fields.');
        return;
      }
      fieldObj.options = optsText.split(',').map(o => o.trim()).filter(o => o.length > 0);
      fieldObj.defaultValue = fieldObj.options[0] || '';
    }

    customFields.push(fieldObj);
  });

  if (!valid) return;

  const newTemplateObj = {
    id: id,
    name: name,
    icon: icon,
    description: desc,
    fields: customFields
  };

  // Save to localStorage
  let userTemplates = JSON.parse(localStorage.getItem('userTemplates')) || [];
  if (isEditing) {
    userTemplates = userTemplates.map(t => t.id === id ? newTemplateObj : t);
  } else {
    userTemplates.push(newTemplateObj);
  }
  localStorage.setItem('userTemplates', JSON.stringify(userTemplates));

  // Reload state
  loadTemplates();
  renderTemplateSelectors();

  // Set new template as active
  selectTemplate(id);

  // Close modal
  closeTemplateModal();

  if (isEditing) {
    showToast(`Template "${name}" updated!`, false);
  } else {
    showToast(`Template "${name}" created!`, false);
  }
}

// Start application on page load
window.addEventListener('DOMContentLoaded', init);
