const { createApp } = Vue
createApp({
    data() {
        return {
            activeImage: '',
            profile: {
                name: "Athalasyah Nabil",
                titles: "Information Systems Student • Freelancer • Investor",
                bio: "I’m an Information Systems student at Mulawarman University with a strong passion for financial technology and digital innovation. I enjoy analyzing data, building digital products, and combining technology with finance to create smarter decisions and opportunities.",
                aboutLong: "Hi, I’m Nabdaff. I’m a freelancer and investor, currently pursuing a degree in Information Systems, Faculty Engineering at Mulawarman University. I have a strong interest in the financial world. Especially financial analysis and how technology transforms the way we understand, manage, and grow the assets. I focus on combining data, systems thinking, and digital tools to create smarter financial decisions and opportunities."
            },
            experiences: [
                "Crew & Freelancer of More Than Concept Organizer",
                "Volunteer of Ayah Amanah Organizer (Ustadz Hanan Attaki Lc.)",
                "Volunteer of LAZISMU Kalimantan Timur",
                "Member of Muhammadiyah Disaster Management Center (MDMC) Kota Samarinda",
                "Member of Muhammadiyah Association",
                "Member Department Creativity and Entrepreneurship of Muhammadiyah Student Association (IPM) Kota Samarinda 2024 - 2026",
                "Staff Human Resource Development of Information System Association (INFORSA) 2025",
                "Member Media and Information of Student Badminton Activity Unit (UKM) Mulawarman University 2024 - 2025",
                "Tresurer of Muhammadiyah Volunteer Corps (KRM) MBS Yogyakarta 2023 - 2024",
                "Member Health Division of Muhammadiyah Student Association (IPM) MBS Yogyakarta 2022 - 2023"
            ],
            skills: [
                { name: "Financial & Investment", level: 90 },
                { name: "UI/UX Design", level: 70 },
                { name: "Data Analysis", level: 75 },
                { name: "Web Development", level: 85 },
                { name: "Soft Skills", level: 80 }
            ],
            certificates: [
                { title: "Penerapan Data Science dengan Microsoft Fabric", issuer: "Dicoding Indonesia", img: "assets/Sertifikat_1.png" },
                { title: "Kelas Pemuda AntiKorupsi Tahun 2025 Provinsi Kalimantan Timur", issuer: "Komisi Pemberantasan Korupsi (KPK)", img: "assets/Sertifikat_2.jpg" },
                { title: "Sahabat Satu Nusa #6", issuer: "YATC Indonesia", img: "assets/Sertifikat_3.jpg" }
            ],
            awards: [
                { title: "Gold Medal Informatics OSSAN 2024", organization: "Prestasi Maju Indonesia (PRESMANESIA)", year: "2024", img: "assets/Award_1.jpg" },
                { title: "Silver Medal Basics Doctor OLIMNAS 2024", organization: "Generasi Maju Indonesia (GEMANESIA)", year: "2024", img: "assets/Award_2.jpg" },
                { title: "Bronze Medal Chemistry KSB 2023", organization: "Braindicator Indonesia", year: "2023", img: "assets/Award_3.jpg" }
            ]
        }
    },
    methods: {
        showImage(imgSrc) {
            this.activeImage = imgSrc;
            const myModal = new bootstrap.Modal(document.getElementById('imageModal'));
            myModal.show();
        }
    },
    mounted() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) entry.target.classList.add("show");
            });
        }, { threshold: 0.1 });
        document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
        window.addEventListener("scroll", () => {
            const nav = document.querySelector(".navbar");
            window.scrollY > 50 ? nav.classList.add("navbar-scrolled") : nav.classList.remove("navbar-scrolled");
        });
        document.addEventListener("mousemove", e => {
            const img = document.querySelector(".profile-pic");
            if(img) {
                let x = (e.clientX / window.innerWidth - 0.5) * 15;
                let y = (e.clientY / window.innerHeight - 0.5) * 15;
                img.style.transform = `translate(${x}px,${y}px)`;
            }
        });
    }
}).mount('#app')