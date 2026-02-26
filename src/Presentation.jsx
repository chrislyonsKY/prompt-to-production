import React from 'react';
import {
  Deck,
  Slide,
  Heading,
  Text,
  FlexBox,
  Box,
  OrderedList,
  ListItem,
  CodeSpan,
  Grid,
  Appear,
} from 'spectacle';

const theme = {
  colors: {
    primary: '#1E2761', // Midnight navy
    secondary: '#CADCFC', // Ice blue
    tertiary: '#FFFFFF',
    accent: '#F96167', // Coral for emphasis
    background: '#FFFFFF',
    text: '#1E2761',
  },
  fonts: {
    header: '"Georgia", serif',
    text: '"Calibri", "Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: '"Consolas", "Courier New", monospace',
  },
  fontSizes: {
    h1: '48px',
    h2: '40px',
    h3: '32px',
    text: '24px',
    small: '18px',
  },
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
    padding="20px"
  >
    <Text fontSize="14px" color={theme.colors.text}>
      From Prompt to Production | Chris Lyons, GIS Analyst III
    </Text>
    <Text fontSize="14px" color={theme.colors.text}>
      Slide {'{slideNumber}'} / 22
    </Text>
  </FlexBox>
);

const Presentation = () => {
  return (
    <Deck theme={theme} template={template}>
      {/* Slide 1: Title */}
      <Slide backgroundColor={theme.colors.primary}>
        <FlexBox height="100%" flexDirection="column" justifyContent="center">
          <Heading color={theme.colors.secondary} fontSize="h1">
            FROM PROMPT TO
          </Heading>
          <Heading color={theme.colors.tertiary} fontSize="h1" margin="0">
            PRODUCTION
          </Heading>
          <Text color={theme.colors.secondary} fontSize="h3" margin="40px 0 60px 0">
            Engineering Enterprise GIS with AI
          </Text>
          <Text color={theme.colors.tertiary} fontSize="text">
            Chris Lyons | GIS Analyst III
          </Text>
          <Text color={theme.colors.secondary} fontSize="small">
            Kentucky Energy & Environment Cabinet | KY GIS Conference 2026
          </Text>
        </FlexBox>
      </Slide>

      {/* Slide 2: About Me */}
      <Slide>
        <Heading fontSize="h2" color={theme.colors.primary}>
          About Me
        </Heading>
        <Grid
          gridTemplateColumns="1fr 1fr"
          gridColumnGap={40}
          margin="40px 0"
        >
          <Box>
            <Box margin="20px 0">
              <Text fontSize="text" fontWeight="bold" color={theme.colors.primary}>
                GIS Analyst III
              </Text>
              <Text fontSize="small" color={theme.colors.text}>
                KY Energy & Environment Cabinet
              </Text>
            </Box>
            <Box margin="20px 0">
              <Text fontSize="text" fontWeight="bold" color={theme.colors.primary}>
                Enterprise GIS
              </Text>
              <Text fontSize="small" color={theme.colors.text}>
                SDE, Oracle, SQL Server
              </Text>
            </Box>
            <Box margin="20px 0">
              <Text fontSize="text" fontWeight="bold" color={theme.colors.primary}>
                Python & .NET Dev
              </Text>
              <Text fontSize="small" color={theme.colors.text}>
                ArcPy, ArcGIS Pro SDK
              </Text>
            </Box>
          </Box>
          <Box>
            <Box margin="20px 0">
              <Text fontSize="text" fontWeight="bold" color={theme.colors.primary}>
                Regulatory GIS
              </Text>
              <Text fontSize="small" color={theme.colors.text}>
                Mining permits & compliance
              </Text>
            </Box>
          </Box>
        </Grid>
        <Text fontSize="text" color={theme.colors.text} margin="40px 0 0 0" fontStyle="italic">
          I write code that automates complex environmental workflows.
          AI has become an essential part of how I build.
        </Text>
      </Slide>

      {/* Slide 3: Sound Familiar */}
      <Slide>
        <Heading fontSize="h2" color={theme.colors.primary}>
          Sound Familiar?
        </Heading>
        <Box margin="60px 0">
          <Appear>
            <Text fontSize="text" color={theme.colors.text} margin="20px 0">
              ✗ Legacy scripts nobody wants to touch
            </Text>
          </Appear>
          <Appear>
            <Text fontSize="text" color={theme.colors.text} margin="20px 0">
              ✗ ODBC dependencies from 2008
            </Text>
          </Appear>
          <Appear>
            <Text fontSize="text" color={theme.colors.text} margin="20px 0">
              ✗ Modernization deadline looming
            </Text>
          </Appear>
          <Appear>
            <Text fontSize="text" color={theme.colors.text} margin="20px 0">
              ✗ No documentation. Anywhere.
            </Text>
          </Appear>
        </Box>
        <Appear>
          <Text fontSize="h3" color={theme.colors.accent} margin="60px 0 0 0" fontWeight="bold">
            What if you had a senior developer on call,
            24 hours a day, who never gets tired?
          </Text>
        </Appear>
      </Slide>

      {/* Slide 4: The AI Toolkit */}
      <Slide>
        <Heading fontSize="h2" color={theme.colors.primary}>
          The AI Toolkit
        </Heading>
        <Grid gridTemplateColumns="1fr 1fr 1fr" gridColumnGap={30} margin="40px 0">
          <Box padding="20px" backgroundColor="#f5f5f5" borderRadius="8px">
            <Heading fontSize="h3" color={theme.colors.primary}>
              Claude
            </Heading>
            <Text fontSize="small" color={theme.colors.text} margin="10px 0">
              Architecture, reasoning, long-context problems. My first call.
            </Text>
          </Box>
          <Box padding="20px" backgroundColor="#f5f5f5" borderRadius="8px">
            <Heading fontSize="h3" color={theme.colors.primary}>
              ChatGPT
            </Heading>
            <Text fontSize="small" color={theme.colors.text} margin="10px 0">
              Quick ideation, alternative approaches, fast second opinions.
            </Text>
          </Box>
          <Box padding="20px" backgroundColor="#f5f5f5" borderRadius="8px">
            <Heading fontSize="h3" color={theme.colors.primary}>
              GitHub Copilot
            </Heading>
            <Text fontSize="small" color={theme.colors.text} margin="10px 0">
              Inline autocomplete inside the editor. Your always-on co-pilot.
            </Text>
          </Box>
        </Grid>
        <Text fontSize="text" color={theme.colors.text} margin="40px 0 0 0" fontStyle="italic">
          Each tool fills a different part of the development cycle.
          Knowing which one to reach for — and when — is itself a skill.
        </Text>
      </Slide>

      {/* Slide 5: Section 1 */}
      <Slide backgroundColor={theme.colors.primary}>
        <FlexBox height="100%" flexDirection="column" justifyContent="center">
          <Heading color={theme.colors.tertiary} fontSize="60px">
            01
          </Heading>
          <Heading color={theme.colors.secondary} fontSize="h1" margin="20px 0">
            The Art of the Prompt
          </Heading>
        </FlexBox>
      </Slide>

      {/* Slide 6: The #1 Mistake */}
      <Slide>
        <Heading fontSize="h2" color={theme.colors.primary}>
          The #1 Mistake People Make
        </Heading>
        <Box margin="40px 0">
          <Text fontSize="text" color={theme.colors.accent} fontWeight="bold">
            WHAT MOST PEOPLE DO:
          </Text>
          <Box
            padding="20px"
            backgroundColor="#f5f5f5"
            borderRadius="8px"
            margin="10px 0 20px 0"
          >
            <Text fontSize="text" fontFamily={theme.fonts.monospace}>
              fix my python script
            </Text>
          </Box>
          <Text fontSize="small" color={theme.colors.text}>
            Too vague. What platform? What error? What are you trying to do?
          </Text>
        </Box>
        <Box margin="40px 0">
          <Text fontSize="text" color={theme.colors.primary} fontWeight="bold">
            WHAT ACTUALLY WORKS:
          </Text>
          <Box
            padding="20px"
            backgroundColor="#f5f5f5"
            borderRadius="8px"
            margin="10px 0 20px 0"
          >
            <Text fontSize="small" fontFamily={theme.fonts.monospace}>
              I'm using ArcGIS Pro 3.3 with arcpy and an enterprise SDE connection.
              My script errors on ExportFeatures with ERROR 000464. Here's the relevant code: [paste].
              What's causing this and how do I fix it?
            </Text>
          </Box>
          <Text fontSize="small" color={theme.colors.text}>
            Context + code + error = actionable answer.
          </Text>
        </Box>
        <Text fontSize="text" color={theme.colors.text} margin="20px 0 0 0" fontWeight="bold">
          The quality of what you get out is directly tied to the quality of what you put in.
        </Text>
      </Slide>

      {/* Slide 7: 6 Rules */}
      <Slide>
        <Heading fontSize="h2" color={theme.colors.primary}>
          6 Rules for Better GIS Prompts
        </Heading>
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={30} margin="30px 0">
          <Box>
            <Box margin="15px 0">
              <Text fontSize="text" color={theme.colors.accent} fontWeight="bold">
                01 Specify your environment
              </Text>
              <Text fontSize="small" color={theme.colors.text}>
                Platform, version, connection type upfront
              </Text>
            </Box>
            <Box margin="15px 0">
              <Text fontSize="text" color={theme.colors.accent} fontWeight="bold">
                02 Give the goal, not just the problem
              </Text>
              <Text fontSize="small" color={theme.colors.text}>
                AI needs context, not just symptoms
              </Text>
            </Box>
            <Box margin="15px 0">
              <Text fontSize="text" color={theme.colors.accent} fontWeight="bold">
                03 Paste actual code & errors
              </Text>
              <Text fontSize="small" color={theme.colors.text}>
                Never paraphrase. Give the real thing.
              </Text>
            </Box>
          </Box>
          <Box>
            <Box margin="15px 0">
              <Text fontSize="text" color={theme.colors.accent} fontWeight="bold">
                04 Ask WHY, not just WHAT
              </Text>
              <Text fontSize="small" color={theme.colors.text}>
                Learn from the answer. Catch errors faster.
              </Text>
            </Box>
            <Box margin="15px 0">
              <Text fontSize="text" color={theme.colors.accent} fontWeight="bold">
                05 Treat it like a conversation
              </Text>
              <Text fontSize="small" color={theme.colors.text}>
                Iterate. Best results come after 2-3 rounds.
              </Text>
            </Box>
            <Box margin="15px 0">
              <Text fontSize="text" color={theme.colors.accent} fontWeight="bold">
                06 Ask for alternatives
              </Text>
              <Text fontSize="small" color={theme.colors.text}>
                "Give me two approaches" — always revealing.
              </Text>
            </Box>
          </Box>
        </Grid>
      </Slide>

      {/* Slide 8: Section 2 */}
      <Slide backgroundColor={theme.colors.primary}>
        <FlexBox height="100%" flexDirection="column" justifyContent="center">
          <Heading color={theme.colors.tertiary} fontSize="60px">
            02
          </Heading>
          <Heading color={theme.colors.secondary} fontSize="h1" margin="20px 0">
            AI in the GIS Workflow
          </Heading>
        </FlexBox>
      </Slide>

      {/* Slide 9: Demo 1 */}
      <Slide>
        <Heading fontSize="h2" color={theme.colors.primary}>
          Demo 1 — Architecture from Scratch
        </Heading>
        <Text fontSize="text" color={theme.colors.text} margin="20px 0">
          Legacy modernization | ArcPy + SDE
        </Text>
        <Box
          padding="20px"
          backgroundColor="#f5f5f5"
          borderRadius="8px"
          margin="20px 0"
        >
          <Text fontSize="small" fontFamily={theme.fonts.monospace}>
            I have a legacy ArcMap script that connects to Oracle via ODBC, runs spatial
            selections against a file GDB, and exports to shapefiles. Modernize this for
            ArcGIS Pro 3.x — replace ODBC with cx_Oracle and write output to an enterprise
            SDE geodatabase. Help me plan the structure before I write any code.
          </Text>
        </Box>
        <Text fontSize="small" color={theme.colors.text} fontStyle="italic">
          Notice: Specific versions, technologies, and workflow goals upfront.
        </Text>
      </Slide>

      {/* Slide 10: Demo 2 */}
      <Slide>
        <Heading fontSize="h2" color={theme.colors.primary}>
          Demo 2 — Debugging Enterprise Issues
        </Heading>
        <Text fontSize="text" color={theme.colors.text} margin="20px 0">
          Connection pooling + transaction locks
        </Text>
        <Box
          padding="20px"
          backgroundColor="#f5f5f5"
          borderRadius="8px"
          margin="20px 0"
        >
          <Text fontSize="small" fontFamily={theme.fonts.monospace}>
            My Python script using arcpy.da.Editor hangs when writing to an SDE feature class.
            The edit session starts but never commits. I'm working with Oracle 19c via a
            direct connect SDE, and I see ORA-00060 deadlock errors in the database logs.
            What's causing this and how do I safely manage transactions?
          </Text>
        </Box>
        <Text fontSize="small" color={theme.colors.text} fontStyle="italic">
          Notice: Error code, database platform, exact context provided.
        </Text>
      </Slide>

      {/* Slide 11: Demo 3 */}
      <Slide>
        <Heading fontSize="h2" color={theme.colors.primary}>
          Demo 3 — Arcade Expression Logic
        </Heading>
        <Text fontSize="text" color={theme.colors.text} margin="20px 0">
          Pop-up conditional styling
        </Text>
        <Box
          padding="20px"
          backgroundColor="#f5f5f5"
          borderRadius="8px"
          margin="20px 0"
        >
          <Text fontSize="small" fontFamily={theme.fonts.monospace}>
            I need an Arcade expression for a pop-up in ArcGIS Online that shows permit
            status as "Active" (green), "Expired" (red), or "Pending" (yellow) based on
            date fields. The logic: if EXPIRATION_DATE is null, show "Pending". If
            EXPIRATION_DATE {'<'} today, show "Expired". Otherwise "Active". Give me the
            expression with proper Arcade syntax.
          </Text>
        </Box>
        <Text fontSize="small" color={theme.colors.text} fontStyle="italic">
          Notice: Clear business logic, specific platform context.
        </Text>
      </Slide>

      {/* Slide 12: Demo 4 */}
      <Slide>
        <Heading fontSize="h2" color={theme.colors.primary}>
          Demo 4 — Metadata Generation
        </Heading>
        <Text fontSize="text" color={theme.colors.text} margin="20px 0">
          FGDC-compliant descriptions at scale
        </Text>
        <Box
          padding="20px"
          backgroundColor="#f5f5f5"
          borderRadius="8px"
          margin="20px 0"
        >
          <Text fontSize="small" fontFamily={theme.fonts.monospace}>
            I have 150 feature classes in an SDE geodatabase with minimal or no metadata.
            Help me build a Python script using arcpy.metadata that programmatically generates
            FGDC-compliant metadata by reading field names, data types, and existing attributes,
            then filling in abstract, purpose, and credit fields based on consistent patterns.
          </Text>
        </Box>
        <Text fontSize="small" color={theme.colors.text} fontStyle="italic">
          Notice: Scale, compliance standard, automation goal defined.
        </Text>
      </Slide>

      {/* Slide 13: What You Get */}
      <Slide>
        <Heading fontSize="h2" color={theme.colors.primary}>
          What You Actually Get
        </Heading>
        <Box margin="40px 0">
          <Appear>
            <Box margin="20px 0">
              <Text fontSize="text" color={theme.colors.accent} fontWeight="bold">
                High-level structure
              </Text>
              <Text fontSize="small" color={theme.colors.text}>
                Class hierarchies, module organization, workflow steps
              </Text>
            </Box>
          </Appear>
          <Appear>
            <Box margin="20px 0">
              <Text fontSize="text" color={theme.colors.accent} fontWeight="bold">
                Skeleton code
              </Text>
              <Text fontSize="small" color={theme.colors.text}>
                Functions, error handling patterns, connection management
              </Text>
            </Box>
          </Appear>
          <Appear>
            <Box margin="20px 0">
              <Text fontSize="text" color={theme.colors.accent} fontWeight="bold">
                Platform-specific gotchas
              </Text>
              <Text fontSize="small" color={theme.colors.text}>
                Version warnings, deprecated syntax, common traps
              </Text>
            </Box>
          </Appear>
          <Appear>
            <Box margin="20px 0">
              <Text fontSize="text" color={theme.colors.accent} fontWeight="bold">
                Testing strategy
              </Text>
              <Text fontSize="small" color={theme.colors.text}>
                Edge cases, transaction rollback, connection cleanup
              </Text>
            </Box>
          </Appear>
        </Box>
        <Appear>
          <Text fontSize="text" color={theme.colors.text} margin="20px 0 0 0" fontWeight="bold">
            AI is best at scaffolding. You fill in the domain expertise.
          </Text>
        </Appear>
      </Slide>

      {/* Slide 14: Real Win */}
      <Slide>
        <Heading fontSize="h2" color={theme.colors.primary}>
          The Real Win
        </Heading>
        <Text fontSize="h3" color={theme.colors.accent} margin="40px 0">
          You don't write faster.
        </Text>
        <Text fontSize="h3" color={theme.colors.accent} margin="20px 0">
          You think faster.
        </Text>
        <Text fontSize="text" color={theme.colors.text} margin="60px 0 0 0">
          AI handles the boilerplate, syntax lookups, and initial structure.
          You spend your time on architecture, logic, and decisions that actually matter.
        </Text>
      </Slide>

      {/* Slide 15: Section 3 */}
      <Slide backgroundColor={theme.colors.primary}>
        <FlexBox height="100%" flexDirection="column" justifyContent="center">
          <Heading color={theme.colors.tertiary} fontSize="60px">
            03
          </Heading>
          <Heading color={theme.colors.secondary} fontSize="h1" margin="20px 0">
            The Honest Truth
          </Heading>
        </FlexBox>
      </Slide>

      {/* Slide 16: AI Gets It Wrong */}
      <Slide>
        <Heading fontSize="h2" color={theme.colors.primary}>
          AI Gets It Wrong
        </Heading>
        <Box margin="40px 0">
          <Box margin="20px 0">
            <Text fontSize="text" color={theme.colors.accent} fontWeight="bold">
              Hallucinated arcpy methods
            </Text>
            <Text fontSize="small" color={theme.colors.text}>
              Functions that simply don't exist in your version
            </Text>
          </Box>
          <Box margin="20px 0">
            <Text fontSize="text" color={theme.colors.accent} fontWeight="bold">
              Deprecated syntax
            </Text>
            <Text fontSize="small" color={theme.colors.text}>
              Old ArcMap patterns that no longer work in Pro
            </Text>
          </Box>
          <Box margin="20px 0">
            <Text fontSize="text" color={theme.colors.accent} fontWeight="bold">
              Wrong database platform
            </Text>
            <Text fontSize="small" color={theme.colors.text}>
              Oracle SYSDATE in a SQL Server query
            </Text>
          </Box>
          <Box margin="20px 0">
            <Text fontSize="text" color={theme.colors.accent} fontWeight="bold">
              Arcade borrows from JavaScript
            </Text>
            <Text fontSize="small" color={theme.colors.text}>
              Syntax that looks right but won't evaluate
            </Text>
          </Box>
        </Box>
        <Text fontSize="text" color={theme.colors.text} margin="20px 0 0 0" fontWeight="bold">
          Domain knowledge matters MORE in the age of AI — not less.
          The more you understand your platform, the faster you catch bad output.
        </Text>
      </Slide>

      {/* Slide 17: Mental Model */}
      <Slide>
        <Heading fontSize="h2" color={theme.colors.primary} margin="0 0 40px 0">
          The Right Mental Model
        </Heading>
        <Grid gridTemplateColumns="2fr 1fr 2fr" alignItems="center">
          <Box>
            <Heading fontSize="h3" color={theme.colors.accent}>
              AI
            </Heading>
            <Text fontSize="small" color={theme.colors.text} margin="10px 0">
              • Speed
            </Text>
            <Text fontSize="small" color={theme.colors.text} margin="10px 0">
              • Boilerplate generation
            </Text>
            <Text fontSize="small" color={theme.colors.text} margin="10px 0">
              • Pattern recall
            </Text>
            <Text fontSize="small" color={theme.colors.text} margin="10px 0">
              • Syntax lookup
            </Text>
            <Text fontSize="small" color={theme.colors.text} margin="10px 0">
              • 24/7 availability
            </Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="60px">⚡</Text>
            <Heading fontSize="h3" color={theme.colors.primary} margin="10px 0">
              GREAT WORK
            </Heading>
          </Box>
          <Box>
            <Heading fontSize="h3" color={theme.colors.primary}>
              YOU
            </Heading>
            <Text fontSize="small" color={theme.colors.text} margin="10px 0">
              • Domain knowledge
            </Text>
            <Text fontSize="small" color={theme.colors.text} margin="10px 0">
              • Data context
            </Text>
            <Text fontSize="small" color={theme.colors.text} margin="10px 0">
              • Workflow logic
            </Text>
            <Text fontSize="small" color={theme.colors.text} margin="10px 0">
              • Critical review
            </Text>
            <Text fontSize="small" color={theme.colors.text} margin="10px 0">
              • Decision making
            </Text>
          </Box>
        </Grid>
        <Text fontSize="text" color={theme.colors.text} margin="40px 0 0 0" fontWeight="bold">
          AI is the accelerant. You are the engine.
        </Text>
      </Slide>

      {/* Slide 18: Tool Not Crutch */}
      <Slide>
        <Heading fontSize="h2" color={theme.colors.primary}>
          Tool, Not Crutch
        </Heading>
        <Box margin="30px 0">
          <Grid gridTemplateColumns="1fr auto 1fr" gridColumnGap={20} alignItems="center" margin="15px 0">
            <Text fontSize="small" color={theme.colors.text}>
              ✗ Let AI design your entire workflow
            </Text>
            <Text fontSize="h3" color={theme.colors.accent}>→</Text>
            <Text fontSize="small" color={theme.colors.text}>
              ✓ Use AI to think through structure before coding
            </Text>
          </Grid>
          <Grid gridTemplateColumns="1fr auto 1fr" gridColumnGap={20} alignItems="center" margin="15px 0">
            <Text fontSize="small" color={theme.colors.text}>
              ✗ Copy-paste output into production
            </Text>
            <Text fontSize="h3" color={theme.colors.accent}>→</Text>
            <Text fontSize="small" color={theme.colors.text}>
              ✓ Review, test, and understand every suggestion
            </Text>
          </Grid>
          <Grid gridTemplateColumns="1fr auto 1fr" gridColumnGap={20} alignItems="center" margin="15px 0">
            <Text fontSize="small" color={theme.colors.text}>
              ✗ Ask vague questions, accept vague answers
            </Text>
            <Text fontSize="h3" color={theme.colors.accent}>→</Text>
            <Text fontSize="small" color={theme.colors.text}>
              ✓ Provide context, iterate, verify the output
            </Text>
          </Grid>
          <Grid gridTemplateColumns="1fr auto 1fr" gridColumnGap={20} alignItems="center" margin="15px 0">
            <Text fontSize="small" color={theme.colors.text}>
              ✗ Rely on AI because you don't want to learn
            </Text>
            <Text fontSize="h3" color={theme.colors.accent}>→</Text>
            <Text fontSize="small" color={theme.colors.text}>
              ✓ Use AI to learn faster and go deeper
            </Text>
          </Grid>
        </Box>
      </Slide>

      {/* Slide 19: Full Disclosure */}
      <Slide>
        <FlexBox height="100%" flexDirection="column" justifyContent="center">
          <Heading fontSize="h2" color={theme.colors.primary}>
            Full disclosure:
          </Heading>
          <Text fontSize="h3" color={theme.colors.text} margin="40px 0">
            This presentation was outlined and drafted with the help of AI.
          </Text>
          <Text fontSize="text" color={theme.colors.text} fontStyle="italic">
            Seemed only fitting to practice what I preach.
          </Text>
        </FlexBox>
      </Slide>

      {/* Slide 20: Key Takeaways */}
      <Slide>
        <Heading fontSize="h2" color={theme.colors.primary}>
          Key Takeaways
        </Heading>
        <Box margin="30px 0">
          <Box margin="20px 0">
            <Text fontSize="text" color={theme.colors.accent} fontWeight="bold">
              01 AI is most valuable at the front end
            </Text>
            <Text fontSize="small" color={theme.colors.text}>
              Architecture and structure before a single line of code
            </Text>
          </Box>
          <Box margin="20px 0">
            <Text fontSize="text" color={theme.colors.accent} fontWeight="bold">
              02 Prompting is a skill
            </Text>
            <Text fontSize="small" color={theme.colors.text}>
              Context + specifics + iteration = dramatically better output
            </Text>
          </Box>
          <Box margin="20px 0">
            <Text fontSize="text" color={theme.colors.accent} fontWeight="bold">
              03 Specify your platform every time
            </Text>
            <Text fontSize="small" color={theme.colors.text}>
              ArcGIS Pro version, Oracle vs. SQL Server, arcpy vs. SDK
            </Text>
          </Box>
          <Box margin="20px 0">
            <Text fontSize="text" color={theme.colors.accent} fontWeight="bold">
              04 Verify everything
            </Text>
            <Text fontSize="small" color={theme.colors.text}>
              Especially Arcade, deprecated arcpy, and cross-platform SQL
            </Text>
          </Box>
          <Box margin="20px 0">
            <Text fontSize="text" color={theme.colors.accent} fontWeight="bold">
              05 You are still the expert
            </Text>
            <Text fontSize="small" color={theme.colors.text}>
              AI amplifies your knowledge. It cannot replace it.
            </Text>
          </Box>
        </Box>
      </Slide>

      {/* Slide 21: Resources */}
      <Slide>
        <Heading fontSize="h2" color={theme.colors.primary}>
          Resources
        </Heading>
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={40} margin="40px 0">
          <Box>
            <Box margin="20px 0">
              <Text fontSize="text" fontWeight="bold" color={theme.colors.primary}>
                Claude (Anthropic)
              </Text>
              <Text fontSize="small" color={theme.colors.text}>
                claude.ai
              </Text>
            </Box>
            <Box margin="20px 0">
              <Text fontSize="text" fontWeight="bold" color={theme.colors.primary}>
                ChatGPT
              </Text>
              <Text fontSize="small" color={theme.colors.text}>
                chat.openai.com
              </Text>
            </Box>
            <Box margin="20px 0">
              <Text fontSize="text" fontWeight="bold" color={theme.colors.primary}>
                GitHub Copilot
              </Text>
              <Text fontSize="small" color={theme.colors.text}>
                github.com/features/copilot
              </Text>
            </Box>
          </Box>
          <Box>
            <Box margin="20px 0">
              <Text fontSize="text" fontWeight="bold" color={theme.colors.primary}>
                ArcGIS Pro SDK Docs
              </Text>
              <Text fontSize="small" color={theme.colors.text}>
                pro.arcgis.com/en/pro-app/sdk
              </Text>
            </Box>
            <Box margin="20px 0">
              <Text fontSize="text" fontWeight="bold" color={theme.colors.primary}>
                Arcade Expression Guide
              </Text>
              <Text fontSize="small" color={theme.colors.text}>
                developers.arcgis.com/arcade
              </Text>
            </Box>
            <Box margin="20px 0">
              <Text fontSize="text" fontWeight="bold" color={theme.colors.primary}>
                GPN Article (full text)
              </Text>
              <Text fontSize="small" color={theme.colors.text}>
                thegpn.org
              </Text>
            </Box>
          </Box>
        </Grid>
      </Slide>

      {/* Slide 22: Closing */}
      <Slide backgroundColor={theme.colors.primary}>
        <FlexBox height="100%" flexDirection="column" justifyContent="center">
          <Heading color={theme.colors.secondary} fontSize="h1">
            Questions?
          </Heading>
          <Text color={theme.colors.tertiary} fontSize="text" margin="40px 0 20px 0">
            Chris Lyons — GIS Analyst III
          </Text>
          <Text color={theme.colors.secondary} fontSize="small">
            Kentucky Energy & Environment Cabinet
          </Text>
          <Text color={theme.colors.tertiary} fontSize="h3" margin="60px 0 20px 0" fontStyle="italic">
            "AI is the accelerant. You are the engine."
          </Text>
          <Text color={theme.colors.secondary} fontSize="small">
            Slides available via GPN | thegpn.org
          </Text>
        </FlexBox>
      </Slide>
    </Deck>
  );
};

export default Presentation;
