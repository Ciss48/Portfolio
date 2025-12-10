import Image from 'next/image';

// Contact information - Update these with your details
const contactInfo = {
  email: 'dungvutien48@gmail.com',
  phone: '0582003168',
  linkedin: 'https://www.linkedin.com/in/d%C5%A9ng-v%C5%A9-81395a25b/'
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24 bg-sky-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Vũ Tiến Dũng
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-semibold">
              Data Analyst / Analytics Engineer / Data Scientist 
            </h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
              I’m a <strong>Mid-level Data Analyst</strong> with a strong technical foundation and hands-on experience
               working with large-scale user behavior data. I specialize in turning complex datasets into
                clear insights and meaningful, story-driven dashboards.
              </p>
              <p>
              I’m comfortable owning end-to-end <strong>ETL workflows</strong> and building <strong>machine learning models</strong> that support product optimization, 
              including churn, CLV, and purchase prediction. Above all, I’m driven by creating real <strong>business impact</strong>. 
              I thrive on deep research, continuous learning, and delivering solutions that truly move the needle.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-5 py-2.5 text-blue-700 text-sm font-semibold shadow-sm hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#certifications"
                className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-5 py-2.5 text-blue-700 text-sm font-semibold shadow-sm hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                Certifications
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-5 py-2.5 text-blue-700 text-sm font-semibold shadow-sm hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                Experience
              </a>
              <a
                href="#awards"
                className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-5 py-2.5 text-blue-700 text-sm font-semibold shadow-sm hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                Awards
              </a>
            </div>
          </div>

          {/* Right side - Profile photo and Contact */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-gray-200 dark:ring-gray-700 bg-gradient-to-br from-blue-400 to-purple-500">
              <Image
                src="/images/profile.png"
                alt="Vũ Tiến Dũng- Data Analyst"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Contact Section */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 w-full max-w-sm space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Contact Me
              </h3>
              
              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm break-all">{contactInfo.email}</span>
              </a>
              
              {/* Phone */}
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm">{contactInfo.phone}</span>
              </a>
              
              {/* LinkedIn */}
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm">LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

