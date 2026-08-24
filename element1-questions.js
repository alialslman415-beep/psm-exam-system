const element1Questions = [

  {
    id: 1,
    question: "Which statement best describes process safety?",
    options: [
      "The prevention of minor workplace injuries only",
      "The prevention and control of major accident hazards",
      "The management of office safety",
      "The use of PPE as the primary safety system"
    ],
    answer: 1,
    explanation: "Process safety focuses on preventing and controlling major accident hazards and high-consequence events.",
    topic: "1.1 Process Safety Management Meaning",
    difficulty: "Easy"
  },

  {
    id: 2,
    question: "Which statement best distinguishes process safety from personal safety?",
    options: [
      "There is no significant difference between the two",
      "Process safety applies only to managers",
      "Personal safety is concerned mainly with explosions",
      "Process safety focuses on major accident hazards, while personal safety often focuses on individual injuries"
    ],
    answer: 3,
    explanation: "Process safety focuses on major accident hazards, whereas personal safety commonly addresses individual workplace injuries.",
    topic: "1.1 Process Safety Management Meaning",
    difficulty: "Easy"
  },

  {
    id: 3,
    question: "Why must senior leaders understand the major hazards associated with their processes?",
    options: [
      "Because only senior leaders carry out maintenance",
      "Because operators are not responsible for process safety",
      "Because their decisions can significantly affect process safety risk",
      "Because process safety is primarily a financial issue"
    ],
    answer: 2,
    explanation: "Leadership decisions involving maintenance, staffing, investment and operations can significantly influence major accident risk.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Medium"
  },

  {
    id: 4,
    question: "Process safety leadership should consider hazards during which stages of the plant life cycle?",
    options: [
      "Design, commissioning, operation and decommissioning",
      "Operation only",
      "Construction and operation only",
      "Commissioning only"
    ],
    answer: 0,
    explanation: "Process safety hazards and controls need consideration throughout the plant life cycle.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Easy"
  },

  {
    id: 5,
    question: "Which action best demonstrates visible process safety leadership?",
    options: [
      "Reviewing process safety only after a major accident",
      "Senior managers actively visiting sites and discussing major process risks",
      "Leaving all process safety decisions to operators",
      "Focusing exclusively on production targets"
    ],
    answer: 1,
    explanation: "Visible leaders actively engage with process safety and demonstrate that major hazard control is a genuine priority.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Medium"
  },

  {
    id: 6,
    question: "Why should individuals with process safety responsibilities be held accountable?",
    options: [
      "Because accountability eliminates the need for training",
      "Because all incidents should be blamed on individuals",
      "Because everyone with process safety responsibilities has a role in preventing major accidents",
      "Because managers have no responsibility for worker actions"
    ],
    answer: 2,
    explanation: "People with process safety responsibilities should be accountable for carrying out those responsibilities effectively.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Medium"
  },

  {
    id: 7,
    question: "Following an incident, which approach is most consistent with effective process safety leadership?",
    options: [
      "Avoid investigation if nobody was injured",
      "Focus only on the immediate unsafe act",
      "Immediately blame the nearest operator",
      "Investigate root causes and wider management or system failures"
    ],
    answer: 3,
    explanation: "Effective investigation looks beyond immediate actions to identify underlying organisational and management causes.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Medium"
  },

  {
    id: 8,
    question: "Which types of resources should leadership provide to support effective process safety management?",
    options: [
      "Human, financial and physical resources",
      "Financial resources only",
      "Human resources only",
      "Physical equipment only"
    ],
    answer: 0,
    explanation: "Effective process safety management requires adequate human, financial and physical resources.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Easy"
  },

  {
    id: 9,
    question: "What is one important benefit of a just culture in process safety?",
    options: [
      "All incidents are treated as individual misconduct",
      "Workers are more willing to report mistakes and near misses",
      "Management no longer needs incident investigations",
      "Workers can ignore procedures without consequences"
    ],
    answer: 1,
    explanation: "A just culture supports reporting and organisational learning while maintaining appropriate accountability.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Medium"
  },

  {
    id: 10,
    question: "Why is organisational learning particularly important in process safety?",
    options: [
      "Only regulators need to learn from accidents",
      "Learning is required only after fatalities",
      "Major accidents are relatively rare, so organisations should learn from both internal and external events",
      "Major accidents occur every day in most organisations"
    ],
    answer: 2,
    explanation: "Organisations should learn from their own experience and relevant events elsewhere in the industry.",
    topic: "1.3 Organisational Learning",
    difficulty: "Medium"
  },

  {
    id: 11,
    question: "Which is an example of an internal source of process safety information?",
    options: [
      "An industry association publication",
      "An external regulator's safety alert",
      "A Chemical Safety Board investigation from another company",
      "Incident and near-miss investigation records"
    ],
    answer: 3,
    explanation: "Incident and near-miss records are important internal sources of process safety learning.",
    topic: "1.3 Organisational Learning",
    difficulty: "Easy"
  },

  {
    id: 12,
    question: "Which is an example of an external source of process safety information?",
    options: [
      "A safety bulletin issued by a regulator or industry body",
      "A company's internal shift log",
      "A worker's internal training record",
      "A local maintenance checklist"
    ],
    answer: 0,
    explanation: "Regulators and industry bodies can provide valuable external process safety information and lessons.",
    topic: "1.3 Organisational Learning",
    difficulty: "Easy"
  },

  {
    id: 13,
    question: "What is the main purpose of investigating process safety incidents and near misses?",
    options: [
      "To satisfy insurance requirements only",
      "To identify causes, learn lessons and prevent recurrence",
      "To identify someone to discipline in every case",
      "To avoid changing existing risk assessments"
    ],
    answer: 1,
    explanation: "Investigation supports learning by identifying causes and actions needed to prevent recurrence.",
    topic: "1.3 Organisational Learning",
    difficulty: "Easy"
  },

  {
    id: 14,
    question: "What is the primary purpose of Management of Change (MOC)?",
    options: [
      "To replace normal operating procedures",
      "To speed up production changes regardless of risk",
      "To ensure changes are assessed, controlled and authorised before implementation",
      "To allow temporary changes without documentation"
    ],
    answer: 2,
    explanation: "MOC is used to understand and control the safety implications of proposed changes before implementation.",
    topic: "1.4 Management of Change",
    difficulty: "Easy"
  },

  {
    id: 15,
    question: "Which types of changes should an effective MOC system consider?",
    options: [
      "Permanent changes only",
      "Temporary changes only",
      "Only changes involving new buildings",
      "Both temporary and permanent changes"
    ],
    answer: 3,
    explanation: "Both temporary and permanent changes may affect major accident risk and require appropriate control.",
    topic: "1.4 Management of Change",
    difficulty: "Easy"
  },

  {
    id: 16,
    question: "A temporary bypass pipe is proposed while equipment is repaired. What should happen before the bypass is installed?",
    options: [
      "The implications of the change should be assessed through the MOC process",
      "The bypass should be installed immediately because it is temporary",
      "Only verbal approval is required",
      "No risk assessment is required if production continues"
    ],
    answer: 0,
    explanation: "Temporary modifications require appropriate assessment and authorisation before implementation.",
    topic: "1.4 Management of Change",
    difficulty: "Hard"
  },

  {
    id: 17,
    question: "What major process safety lesson is associated with the Flixborough disaster?",
    options: [
      "PPE is the most important control for major accidents",
      "Temporary plant modifications require effective Management of Change",
      "Shift handover is unnecessary when experienced workers are present",
      "Temporary equipment does not require engineering review"
    ],
    answer: 1,
    explanation: "Flixborough highlighted the serious risks associated with inadequately assessed temporary plant modifications.",
    topic: "1.4 Management of Change",
    difficulty: "Medium"
  },

  {
    id: 18,
    question: "What is an important benefit of involving workers in process safety risk assessments?",
    options: [
      "They make management approval unnecessary",
      "They automatically eliminate all hazards",
      "They can provide practical knowledge about how work is actually carried out",
      "They remove the need for competent risk assessors"
    ],
    answer: 2,
    explanation: "Workers can contribute valuable practical knowledge of hazards, operating conditions and actual work practices.",
    topic: "1.5 Worker Engagement",
    difficulty: "Medium"
  },

  {
    id: 19,
    question: "Which statement best describes effective worker consultation?",
    options: [
      "It involves workers only after decisions have been made",
      "It replaces the need for management responsibility",
      "It is management issuing instructions without feedback",
      "It is a two-way exchange in which workers can contribute and management responds"
    ],
    answer: 3,
    explanation: "Effective consultation requires genuine two-way communication and meaningful worker involvement.",
    topic: "1.5 Worker Engagement",
    difficulty: "Easy"
  },

  {
    id: 20,
    question: "Which statement provides the best evidence that a worker is competent?",
    options: [
      "The worker consistently performs the required task correctly to the required standard",
      "The worker attended a training course",
      "The worker signed an attendance sheet",
      "The worker has worked for the company for many years"
    ],
    answer: 0,
    explanation: "Competence requires appropriate knowledge, skills and experience demonstrated through satisfactory task performance.",
    topic: "1.6 Competence",
    difficulty: "Medium"
  },
  {
    id: 21,
    question: "Which statement best describes competence in process safety?",
    options: [
      "Attendance at a training course only",
      "A combination of knowledge, skills and practical experience",
      "Length of service only",
      "Possession of a certificate only"
    ],
    answer: 1,
    explanation: "Competence requires appropriate knowledge, skills and experience and should be demonstrated in practice.",
    topic: "1.6 Competence",
    difficulty: "Easy"
  },

  {
    id: 22,
    question: "Why is training attendance alone insufficient evidence of competence?",
    options: [
      "Because training records are not useful",
      "Because only supervisors can be competent",
      "Because the worker must also demonstrate the ability to perform the task correctly",
      "Because experience is always more important than knowledge"
    ],
    answer: 2,
    explanation: "Training is one part of competence; the person must also demonstrate satisfactory task performance.",
    topic: "1.6 Competence",
    difficulty: "Medium"
  },

  {
    id: 23,
    question: "What is a common purpose of a training matrix?",
    options: [
      "To identify production targets",
      "To record only employee attendance",
      "To replace all competence assessments",
      "To show the competence and training requirements for different roles"
    ],
    answer: 3,
    explanation: "A training matrix helps identify and track training and competence requirements for different roles.",
    topic: "1.6 Competence",
    difficulty: "Easy"
  },

  {
    id: 24,
    question: "Why may emergency situations require additional competence?",
    options: [
      "Because workers may need to diagnose and act correctly under increased pressure",
      "Because procedures are not required during emergencies",
      "Because only managers respond to emergencies",
      "Because emergency work is always simpler than normal operation"
    ],
    answer: 0,
    explanation: "Abnormal and emergency situations may require workers to make correct decisions and take appropriate actions under pressure.",
    topic: "1.6 Competence",
    difficulty: "Medium"
  },

  {
    id: 25,
    question: "What should an organisation do when a competence gap is identified?",
    options: [
      "Ignore the gap if the worker is experienced",
      "Provide appropriate training, development or other measures to close the gap",
      "Transfer all responsibility to the worker",
      "Remove all process safety duties permanently"
    ],
    answer: 1,
    explanation: "Identified competence gaps should be addressed through suitable training, development, supervision or other appropriate measures.",
    topic: "1.6 Competence",
    difficulty: "Medium"
  },

  {
    id: 26,
    question: "Which action best supports continual improvement in process safety competence?",
    options: [
      "One induction course at the start of employment only",
      "Stopping refresher training",
      "Periodic assessment and reassessment of competence",
      "Using the same competence requirements forever"
    ],
    answer: 2,
    explanation: "Competence should be maintained and reviewed because roles, processes and requirements can change.",
    topic: "1.6 Competence",
    difficulty: "Medium"
  },

  {
    id: 27,
    question: "Which statement best describes effective process safety leadership?",
    options: [
      "Leaders focus only on personal safety statistics",
      "Leaders become involved only after a major incident",
      "Leaders delegate all responsibility and avoid operational involvement",
      "Leaders set expectations, provide resources and remain visibly engaged"
    ],
    answer: 3,
    explanation: "Effective leadership requires visible commitment, adequate resources, clear expectations and active engagement.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Medium"
  },

  {
    id: 28,
    question: "Why should process safety responsibilities be clearly defined?",
    options: [
      "So people understand what they are expected to do and can be held accountable",
      "So only senior managers need to understand process safety",
      "So workers can avoid responsibility for major hazards",
      "So incident investigations are unnecessary"
    ],
    answer: 0,
    explanation: "Clearly defined responsibilities help people understand their duties and support effective accountability.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Easy"
  },

  {
    id: 29,
    question: "Which example best represents a leading process safety action?",
    options: [
      "Counting injuries after they occur",
      "Ensuring overdue safety-critical maintenance is completed",
      "Recording the number of major accidents from last year",
      "Calculating compensation costs after an incident"
    ],
    answer: 1,
    explanation: "Leading actions are proactive and aim to prevent failures before major events occur.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Medium"
  },

  {
    id: 30,
    question: "What is the main value of setting process safety objectives and targets?",
    options: [
      "They replace risk assessment",
      "They guarantee that incidents cannot occur",
      "They provide direction and a basis for monitoring improvement",
      "They eliminate the need for leadership"
    ],
    answer: 2,
    explanation: "Objectives and targets provide direction and allow process safety improvement to be monitored.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Easy"
  },

  {
    id: 31,
    question: "Which statement best describes benchmarking in process safety?",
    options: [
      "Comparing only personal injury rates",
      "Replacing internal audits with external data",
      "Copying another organisation's procedures without assessment",
      "Comparing performance or practices with suitable organisations to identify improvement opportunities"
    ],
    answer: 3,
    explanation: "Benchmarking allows organisations to compare performance and practices and identify opportunities for improvement.",
    topic: "1.3 Organisational Learning",
    difficulty: "Medium"
  },

  {
    id: 32,
    question: "Why should lessons from major accidents be shared across the process industry?",
    options: [
      "Because the potential benefit extends beyond the organisation where the incident occurred",
      "Because all organisations use identical equipment",
      "Because external incidents are more important than internal incidents",
      "Because regulators are solely responsible for learning"
    ],
    answer: 0,
    explanation: "Sharing lessons allows other organisations to recognise similar weaknesses and help prevent recurrence.",
    topic: "1.3 Organisational Learning",
    difficulty: "Medium"
  },

  {
    id: 33,
    question: "A near miss involved a loss of containment but caused no injury. What is the best response?",
    options: [
      "Ignore it because no one was hurt",
      "Investigate its causes and potential consequences and share the lessons learned",
      "Only remind the operator to be more careful",
      "Record it without further action"
    ],
    answer: 1,
    explanation: "A significant near miss can reveal weaknesses in major accident controls and should be investigated and used for learning.",
    topic: "1.3 Organisational Learning",
    difficulty: "Hard"
  },

  {
    id: 34,
    question: "Which statement best describes a root cause?",
    options: [
      "The immediate physical consequence only",
      "The final injury caused by the incident",
      "An underlying organisational or management condition that allowed the event to occur",
      "The first person who noticed the problem"
    ],
    answer: 2,
    explanation: "Root causes are underlying conditions that allow immediate causes and failures to develop.",
    topic: "1.3 Organisational Learning",
    difficulty: "Medium"
  },

  {
    id: 35,
    question: "Which type of information is most useful for preserving organisational learning?",
    options: [
      "Personal notes kept by one worker",
      "Verbal memory only",
      "Informal conversations without records",
      "Documented investigation findings, lessons learned and updated procedures"
    ],
    answer: 3,
    explanation: "Documented information helps preserve corporate memory and prevents important lessons from being lost.",
    topic: "1.3 Organisational Learning",
    difficulty: "Medium"
  },

  {
    id: 36,
    question: "When should a proposed process change be assessed under MOC?",
    options: [
      "Before the change is implemented",
      "Only after the change has caused a problem",
      "Only when the change is permanent",
      "After production has restarted"
    ],
    answer: 0,
    explanation: "The implications of a proposed change should be assessed before implementation.",
    topic: "1.4 Management of Change",
    difficulty: "Easy"
  },

  {
    id: 37,
    question: "Why is hazard identification required during Management of Change?",
    options: [
      "To reduce the amount of documentation required",
      "To identify new hazards or increases in existing risk before the change is made",
      "To confirm that all changes are automatically safe",
      "To eliminate the need for technical approval"
    ],
    answer: 1,
    explanation: "A change may introduce new hazards or alter existing risks, so these implications need to be identified and assessed.",
    topic: "1.4 Management of Change",
    difficulty: "Medium"
  },

  {
    id: 38,
    question: "Which change would normally require consideration under an MOC process?",
    options: [
      "Replacing office stationery",
      "Ordering routine cleaning supplies",
      "Changing a safety-critical trip setting",
      "Changing the colour of a noticeboard"
    ],
    answer: 2,
    explanation: "Changing a safety-critical setting can alter the effectiveness of a safeguard and therefore requires appropriate change control.",
    topic: "1.4 Management of Change",
    difficulty: "Medium"
  },

  {
    id: 39,
    question: "Why should affected workers be informed and trained before a significant process change is introduced?",
    options: [
      "So management can transfer all responsibility to workers",
      "So technical review is no longer needed",
      "So the MOC process can be cancelled",
      "So they understand the changed hazards, controls and procedures"
    ],
    answer: 3,
    explanation: "Workers affected by a change need to understand any new hazards, controls and operating requirements.",
    topic: "1.4 Management of Change",
    difficulty: "Medium"
  },

  {
    id: 40,
    question: "Which statement best describes effective worker engagement in process safety?",
    options: [
      "Workers are actively involved in identifying hazards, developing controls and improving procedures",
      "Workers receive information but are not asked for input",
      "Workers are consulted only after incidents",
      "Worker involvement replaces management responsibility"
    ],
    answer: 0,
    explanation: "Effective worker engagement is active and two-way and uses workers' practical knowledge to improve process safety.",
    topic: "1.5 Worker Engagement",
    difficulty: "Easy"
  },
    {
    id: 41,
    question: "What is a key responsibility of senior management in process safety?",
    options: [
      "Delegating all process safety responsibility to operators",
      "Ensuring adequate resources are available to manage major accident hazards",
      "Focusing only on personal injury statistics",
      "Reducing maintenance whenever production demand increases"
    ],
    answer: 1,
    explanation: "Senior management should ensure adequate human, financial and physical resources are available for effective process safety management.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Easy"
  },

  {
    id: 42,
    question: "A senior manager repeatedly postpones safety-critical maintenance to meet production targets. What is the main process safety concern?",
    options: [
      "The decision affects only personal safety",
      "Maintenance has no relationship with process safety",
      "The decision may increase the likelihood of a major accident",
      "The decision is acceptable if no incident has occurred"
    ],
    answer: 2,
    explanation: "Delaying safety-critical maintenance can weaken safeguards and increase major accident risk.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Hard"
  },

  {
    id: 43,
    question: "Why should leaders seek expert process safety advice when making important business decisions?",
    options: [
      "Because experts should make all business decisions",
      "Because operators should not participate in safety decisions",
      "Because expert advice removes management accountability",
      "Because commercial decisions may have significant process safety implications"
    ],
    answer: 3,
    explanation: "Business decisions involving staffing, equipment, maintenance and operations can affect major accident risk.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Medium"
  },

  {
    id: 44,
    question: "Which behaviour would most strongly indicate poor process safety culture?",
    options: [
      "Workers routinely bypass procedures to maintain production",
      "Workers report near misses",
      "Managers discuss major hazards during site visits",
      "Safety-critical maintenance is properly planned"
    ],
    answer: 0,
    explanation: "Routine acceptance of shortcuts can indicate that production is being prioritised over effective process safety controls.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Medium"
  },

  {
    id: 45,
    question: "What is the main purpose of process safety performance indicators?",
    options: [
      "To measure employee attendance only",
      "To provide information about how effectively major accident risks are being controlled",
      "To replace risk assessments",
      "To eliminate the need for audits"
    ],
    answer: 1,
    explanation: "Process safety indicators help management monitor the effectiveness and condition of major hazard controls.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Medium"
  },

  {
    id: 46,
    question: "Which of the following is the best example of a proactive process safety indicator?",
    options: [
      "Number of major fires that occurred last year",
      "Cost of damage following an explosion",
      "Percentage of safety-critical inspections completed on time",
      "Number of injuries caused by a previous incident"
    ],
    answer: 2,
    explanation: "Completion of safety-critical inspections is proactive because it monitors preventive controls before an event occurs.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Medium"
  },

  {
    id: 47,
    question: "An organisation discovers that the same type of near miss has occurred several times at different sites. What should management do?",
    options: [
      "Investigate only the most recent event",
      "Ignore the events because no injuries occurred",
      "Treat each event only as an individual operator error",
      "Identify common underlying causes and share corrective actions across the organisation"
    ],
    answer: 3,
    explanation: "Repeated events can indicate systemic weaknesses that require organisation-wide learning and corrective action.",
    topic: "1.3 Organisational Learning",
    difficulty: "Hard"
  },

  {
    id: 48,
    question: "Why is corporate memory important in process safety?",
    options: [
      "It helps prevent important safety knowledge and lessons being lost over time",
      "It replaces formal procedures",
      "It eliminates the need for training",
      "It allows organisations to avoid documenting incidents"
    ],
    answer: 0,
    explanation: "Corporate memory preserves important knowledge of hazards, incidents and lessons when personnel or organisational structures change.",
    topic: "1.3 Organisational Learning",
    difficulty: "Medium"
  },

  {
    id: 49,
    question: "Which action best demonstrates organisational learning following an incident?",
    options: [
      "Filing the investigation report without further action",
      "Updating relevant risk assessments, procedures and training based on the findings",
      "Discussing the incident informally and making no changes",
      "Waiting for a similar incident before taking action"
    ],
    answer: 1,
    explanation: "Organisational learning requires investigation findings to be converted into suitable improvements and actions.",
    topic: "1.3 Organisational Learning",
    difficulty: "Medium"
  },

  {
    id: 50,
    question: "Why should organisations learn from incidents that occur in other companies?",
    options: [
      "Because external incidents always have identical causes",
      "Because internal incidents do not provide useful information",
      "Because similar hazards and management failures may exist within their own operations",
      "Because only external investigations identify root causes"
    ],
    answer: 2,
    explanation: "External incidents may reveal hazards and weaknesses that are also relevant to another organisation.",
    topic: "1.3 Organisational Learning",
    difficulty: "Medium"
  },

  {
    id: 51,
    question: "A process engineer proposes changing the operating temperature of a reactor. What should happen first?",
    options: [
      "The temperature should be changed and reviewed later",
      "Only the operator needs to approve the change",
      "No review is needed if the equipment remains the same",
      "The proposed change should be assessed through the Management of Change process"
    ],
    answer: 3,
    explanation: "Changes in operating conditions may affect hazards and safeguards and should be assessed before implementation.",
    topic: "1.4 Management of Change",
    difficulty: "Hard"
  },

  {
    id: 52,
    question: "Which of the following is an important part of an effective MOC process?",
    options: [
      "Defining the technical basis and safety implications of the proposed change",
      "Implementing the change before assessing the risk",
      "Avoiding documentation for temporary changes",
      "Obtaining approval only after commissioning"
    ],
    answer: 0,
    explanation: "The technical basis and safety implications of a proposed change should be understood before implementation.",
    topic: "1.4 Management of Change",
    difficulty: "Medium"
  },

  {
    id: 53,
    question: "A temporary modification has reached its authorised expiry date but is still required. What is the most appropriate action?",
    options: [
      "Leave it indefinitely because it has operated without an incident",
      "Formally review and reauthorise it through the MOC system, or restore the original arrangement",
      "Remove its documentation but keep the modification",
      "Allow the operator to decide whether it remains"
    ],
    answer: 1,
    explanation: "Temporary changes require formal control and review and should not become uncontrolled permanent modifications.",
    topic: "1.4 Management of Change",
    difficulty: "Hard"
  },

  {
    id: 54,
    question: "Why should drawings and operating procedures be updated following an approved plant modification?",
    options: [
      "To reduce the need for worker training",
      "To eliminate future risk assessments",
      "To ensure documentation accurately reflects the changed plant and operating arrangements",
      "To allow further modifications without MOC"
    ],
    answer: 2,
    explanation: "Current documentation is necessary so workers and future assessments are based on the actual plant configuration.",
    topic: "1.4 Management of Change",
    difficulty: "Medium"
  },

  {
    id: 55,
    question: "Which statement best describes meaningful worker participation?",
    options: [
      "Workers are informed only after decisions have been finalised",
      "Workers make all process safety decisions without management",
      "Workers participate only after a major accident",
      "Workers are given suitable information and an opportunity to influence relevant process safety decisions"
    ],
    answer: 3,
    explanation: "Meaningful participation gives workers suitable information and genuine opportunities to contribute to relevant decisions.",
    topic: "1.5 Worker Engagement",
    difficulty: "Medium"
  },

  {
    id: 56,
    question: "During a risk assessment, an experienced operator identifies a hazard not considered by the engineering team. What is the best response?",
    options: [
      "Evaluate the operator's concern and incorporate it into the assessment where appropriate",
      "Ignore it because the operator is not an engineer",
      "Wait until an incident occurs before considering it",
      "Remove the operator from the assessment team"
    ],
    answer: 0,
    explanation: "Operators can provide valuable practical knowledge of how processes and tasks are actually carried out.",
    topic: "1.5 Worker Engagement",
    difficulty: "Hard"
  },

  {
    id: 57,
    question: "Which factor is most likely to discourage workers from reporting process safety concerns?",
    options: [
      "Visible management commitment",
      "Fear of blame or disciplinary action for raising problems",
      "Effective two-way communication",
      "A positive reporting culture"
    ],
    answer: 1,
    explanation: "A blame-oriented culture can discourage reporting and prevent management from learning about hazards and near misses.",
    topic: "1.5 Worker Engagement",
    difficulty: "Medium"
  },

  {
    id: 58,
    question: "A newly trained operator passes a written test but cannot safely perform a critical task without assistance. What does this indicate?",
    options: [
      "The written test alone proves competence",
      "Further assessment is unnecessary",
      "Competence has not yet been fully demonstrated",
      "The operating procedure should be removed"
    ],
    answer: 2,
    explanation: "Competence requires demonstrated ability to apply knowledge and skills correctly in practice.",
    topic: "1.6 Competence",
    difficulty: "Hard"
  },

  {
    id: 59,
    question: "Why should contractor competence be considered in process safety management?",
    options: [
      "Because contractors are responsible only for personal safety",
      "Because contractor competence is entirely the contractor's concern",
      "Because contractors never work on safety-critical equipment",
      "Because contractor activities can affect major accident hazards and safety-critical systems"
    ],
    answer: 3,
    explanation: "Contractors may carry out safety-critical work, so their competence can directly affect major accident risk.",
    topic: "1.6 Competence",
    difficulty: "Medium"
  },

  {
    id: 60,
    question: "Which approach provides the strongest assurance of competence for a safety-critical role?",
    options: [
      "Defined competence standards, appropriate training, practical assessment and periodic reassessment",
      "A single induction session",
      "Length of service alone",
      "A signed training attendance sheet"
    ],
    answer: 0,
    explanation: "Competence assurance requires defined standards and evidence of satisfactory performance, supported by training and reassessment.",
    topic: "1.6 Competence",
    difficulty: "Medium"
  },
   {
    id: 61,
    question: "A plant has achieved excellent personal injury statistics for several years. However, safety-critical inspections are increasingly overdue. What should management conclude?",
    options: [
      "The plant has excellent process safety because injury rates are low",
      "Good personal safety performance does not necessarily demonstrate effective control of major accident hazards",
      "Safety-critical inspections can be delayed while injury rates remain low",
      "Process safety performance should be measured only after a major accident"
    ],
    answer: 1,
    explanation: "Personal safety indicators alone may not reveal deterioration in major accident controls. Overdue safety-critical inspections can indicate increasing process safety risk.",
    topic: "1.1 Process Safety Management Meaning",
    difficulty: "Hard"
  },

  {
    id: 62,
    question: "During a site visit, a director asks operators about major hazards, checks whether safety-critical maintenance is overdue and follows up concerns raised by workers. What does this best demonstrate?",
    options: [
      "Transfer of management responsibility to operators",
      "A reactive approach to process safety",
      "Visible and active process safety leadership",
      "Personal safety monitoring only"
    ],
    answer: 2,
    explanation: "Visible leadership includes engaging with workers, understanding major hazards, challenging weaknesses and following up process safety concerns.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Medium"
  },

  {
    id: 63,
    question: "Production is behind schedule and a manager suggests bypassing a safety-critical protection system for several days. What is the most appropriate response?",
    options: [
      "Bypass it because production targets have priority",
      "Allow the operator to decide without documentation",
      "Bypass it as long as no previous incident has occurred",
      "Do not bypass it without formal assessment and authorisation through the appropriate change and risk-control process"
    ],
    answer: 3,
    explanation: "Changes affecting safety-critical safeguards can significantly alter major accident risk and require formal assessment and authorisation.",
    topic: "1.4 Management of Change",
    difficulty: "Hard"
  },

  {
    id: 64,
    question: "A company investigates a loss-of-containment incident and concludes only that an operator opened the wrong valve. What important step may be missing?",
    options: [
      "Investigation of underlying organisational and management causes",
      "Immediate replacement of every valve",
      "Cancellation of all operator training",
      "Removal of the incident from company records"
    ],
    answer: 0,
    explanation: "Stopping at the immediate human error may miss underlying causes such as poor procedures, inadequate competence, design or management weaknesses.",
    topic: "1.3 Organisational Learning",
    difficulty: "Hard"
  },

  {
    id: 65,
    question: "A worker reports that an operating procedure no longer matches how the modified plant actually works. What is the best response?",
    options: [
      "Tell the worker to continue using the old procedure",
      "Investigate the discrepancy and ensure the plant documentation and procedures accurately reflect the approved configuration",
      "Ignore the concern because the plant is operating",
      "Remove the procedure without replacing it"
    ],
    answer: 1,
    explanation: "Accurate procedures and documentation are important for safe operation and should reflect the actual approved plant configuration.",
    topic: "1.4 Management of Change",
    difficulty: "Hard"
  },

  {
    id: 66,
    question: "Several experienced employees are due to retire from a high-hazard facility. What process safety concern should management address?",
    options: [
      "Only the cost of recruiting replacements",
      "The number of annual leave days remaining",
      "Potential loss of organisational knowledge and competence",
      "Whether the employees have personal injury records"
    ],
    answer: 2,
    explanation: "Loss of experienced personnel can result in loss of important process knowledge and corporate memory unless knowledge is captured and transferred.",
    topic: "1.3 Organisational Learning",
    difficulty: "Medium"
  },

  {
    id: 67,
    question: "A major accident occurs at another company using a similar process to yours. Your organisation has never experienced such an event. What should you do?",
    options: [
      "Take no action because the accident occurred elsewhere",
      "Wait until your organisation experiences the same event",
      "Assume your existing controls must be adequate",
      "Review the external lessons and determine whether similar vulnerabilities exist in your own operations"
    ],
    answer: 3,
    explanation: "Effective organisational learning includes learning from relevant external incidents before similar failures occur internally.",
    topic: "1.3 Organisational Learning",
    difficulty: "Hard"
  },

  {
    id: 68,
    question: "Which situation provides the strongest evidence of a positive reporting culture?",
    options: [
      "Workers openly report near misses and hazards without unreasonable fear of blame",
      "Workers hide minor events to protect performance statistics",
      "Only managers are permitted to report process safety concerns",
      "Near misses are recorded only when equipment is damaged"
    ],
    answer: 0,
    explanation: "A positive reporting culture encourages workers to raise hazards, errors and near misses so the organisation can learn.",
    topic: "1.5 Worker Engagement",
    difficulty: "Medium"
  },

  {
    id: 69,
    question: "An operator suggests a safer method for carrying out a routine process task. What is the best management response?",
    options: [
      "Reject it because procedures can never be changed",
      "Evaluate the suggestion and involve relevant workers in determining whether the improvement should be adopted",
      "Adopt it immediately without risk assessment",
      "Ignore it unless a regulator requests the change"
    ],
    answer: 1,
    explanation: "Worker engagement should encourage practical contributions while ensuring proposed changes are properly assessed.",
    topic: "1.5 Worker Engagement",
    difficulty: "Hard"
  },

  {
    id: 70,
    question: "A competent operator is transferred to a process unit that uses different equipment and operating procedures. What should management do?",
    options: [
      "Assume competence automatically transfers to every process",
      "Allow independent operation immediately because the worker is experienced",
      "Assess the competence requirements for the new role and provide any necessary training or supervision",
      "Require no assessment unless an incident occurs"
    ],
    answer: 2,
    explanation: "Competence is related to the specific role and task. Experience in one area does not automatically demonstrate competence in another.",
    topic: "1.6 Competence",
    difficulty: "Hard"
  },

  {
    id: 71,
    question: "Which management decision would present the greatest process safety concern?",
    options: [
      "Changing the office furniture supplier",
      "Updating administrative stationery",
      "Changing the colour of employee identification cards",
      "Reducing safety-critical staffing without assessing the effect on major accident risk"
    ],
    answer: 3,
    explanation: "Changes to staffing in safety-critical operations can affect the ability to control major hazards and should be properly assessed.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Medium"
  },

  {
    id: 72,
    question: "A temporary plant modification was installed six months ago and everyone now treats it as permanent, but no formal review was completed. What is the main concern?",
    options: [
      "The temporary change has escaped effective MOC control",
      "Temporary modifications automatically become permanent after six months",
      "No review is necessary if production has continued",
      "Only permanent equipment purchases require MOC"
    ],
    answer: 0,
    explanation: "Temporary changes should have defined controls, duration and review arrangements and should not become uncontrolled permanent modifications.",
    topic: "1.4 Management of Change",
    difficulty: "Hard"
  },

  {
    id: 73,
    question: "During an emergency exercise, an operator cannot correctly respond to an abnormal process condition despite having completed the required training course. What should this indicate to management?",
    options: [
      "The operator must be competent because the course was completed",
      "Training completion alone has not demonstrated the required competence",
      "Emergency exercises are not relevant to competence",
      "The training record should be deleted"
    ],
    answer: 1,
    explanation: "Competence requires the ability to apply knowledge and skills effectively in practice, not simply completion of training.",
    topic: "1.6 Competence",
    difficulty: "Hard"
  },

  {
    id: 74,
    question: "Workers repeatedly raise the same process safety concern, but management provides no response. What is the likely effect?",
    options: [
      "Worker participation will automatically improve",
      "The process safety culture will necessarily strengthen",
      "Worker trust and future engagement may decline",
      "The hazard will be considered controlled"
    ],
    answer: 2,
    explanation: "Consultation must be meaningful. Failure to respond can reduce trust and discourage workers from raising future concerns.",
    topic: "1.5 Worker Engagement",
    difficulty: "Medium"
  },

  {
    id: 75,
    question: "A company completes incident investigations but repeatedly fails to implement the resulting recommendations. What does this indicate?",
    options: [
      "Excellent process safety performance",
      "An effective Management of Change system",
      "Strong competence assurance",
      "Weakness in converting organisational learning into effective action"
    ],
    answer: 3,
    explanation: "Investigation alone is insufficient. Lessons need to result in suitable actions that are implemented and followed through.",
    topic: "1.3 Organisational Learning",
    difficulty: "Hard"
  },

  {
    id: 76,
    question: "A proposed modification is technically safe but changes how operators perform a safety-critical task. What else should be considered before implementation?",
    options: [
      "The effect on procedures, training and worker competence",
      "Only the purchase cost of the modification",
      "Whether the modification improves the appearance of the plant",
      "Nothing else because the engineering design is safe"
    ],
    answer: 0,
    explanation: "MOC should consider human and organisational implications as well as technical hazards.",
    topic: "1.4 Management of Change",
    difficulty: "Hard"
  },

  {
    id: 77,
    question: "Which statement best reflects senior management accountability for process safety?",
    options: [
      "Delegating a task removes all management accountability",
      "Senior management remains accountable for ensuring effective process safety arrangements even when specific tasks are delegated",
      "Only operators are accountable for major accident prevention",
      "Contractors automatically assume management accountability when they enter the site"
    ],
    answer: 1,
    explanation: "Specific tasks can be delegated, but leadership remains accountable for establishing and resourcing effective process safety arrangements.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Medium"
  },

  {
    id: 78,
    question: "An organisation wants to determine whether its process safety competence system remains effective. Which approach is most appropriate?",
    options: [
      "Check only whether workers attended induction",
      "Assume experienced personnel remain competent indefinitely",
      "Periodically review competence requirements and reassess personnel against them",
      "Review competence only following a major accident"
    ],
    answer: 2,
    explanation: "Competence requirements and performance should be periodically reviewed because roles, processes and technology can change.",
    topic: "1.6 Competence",
    difficulty: "Medium"
  },

  {
    id: 79,
    question: "A site has detailed process safety procedures, but supervisors routinely allow shortcuts to increase production. What is the most significant weakness?",
    options: [
      "The procedures are automatically effective because they are written",
      "The issue concerns personal safety only",
      "No action is required unless a major accident occurs",
      "The actual safety culture and leadership behaviour do not support the documented arrangements"
    ],
    answer: 3,
    explanation: "Written systems alone are insufficient. Leadership behaviour and organisational culture must support the required process safety standards.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Hard"
  },

  {
    id: 80,
    question: "Following several process safety warning signs, management must choose between continuing production and shutting down temporarily to restore safety-critical controls. What should have priority?",
    options: [
      "Maintaining adequate control of major accident hazards",
      "Production output regardless of the condition of safeguards",
      "Avoiding maintenance expenditure",
      "Protecting short-term production statistics"
    ],
    answer: 0,
    explanation: "Production objectives should not override the need to maintain effective control of major accident hazards and safety-critical safeguards.",
    topic: "1.2 Process Safety Leadership",
    difficulty: "Hard"
  }

];

function shuffleArray(items) {
  const array = [...items];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function getElement1ExamQuestions(count = 25) {
  const selected = shuffleArray(element1Questions)
    .slice(0, Math.min(count, element1Questions.length));

  return selected.map((q) => {
    const choices = q.options.map((text, index) => ({
      text: text,
      isCorrect: index === q.answer
    }));

    const shuffledChoices = shuffleArray(choices);

    return {
      ...q,
      options: shuffledChoices.map(choice => choice.text),
      answer: shuffledChoices.findIndex(choice => choice.isCorrect)
    };
  });
}

if (typeof window !== "undefined") {
  window.element1Questions = element1Questions;
  window.getElement1ExamQuestions = getElement1ExamQuestions;
}
