@REM ----------------------------------------------------------------------------
@REM Licensed to the Apache Software Foundation (ASF) under one
@REM or more contributor license agreements.  See the NOTICE file
@REM distributed with this work for additional information
@REM regarding copyright ownership.  The ASF licenses this file
@REM to you under the Apache License, Version 2.0 (the
@REM "License"); you may not use this file except in compliance
@REM with the License.  You may obtain a copy of the License at
@REM
@REM    https://www.apache.org/licenses/LICENSE-2.0
@REM
@REM Unless required by applicable law or agreed to in writing,
@REM software distributed under the License is distributed on an
@REM "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
@REM KIND, either express or implied.  See the License for the
@REM specific language governing permissions and limitations
@REM under the License.
@REM ----------------------------------------------------------------------------

@REM ----------------------------------------------------------------------------
@REM Apache Maven Wrapper startup batch script, version 3.2.0
@REM ----------------------------------------------------------------------------

@IF "%__MVNW_ARG0_NAME__%"=="" (SET "__MVNW_ARG0_NAME__=%~nx0")
@SET @@MVNW_CMD=
@SET @@MVNW_ERROR=
@SET @@MVNW_JAVA_EXE=%JAVA_HOME%\bin\java.exe

@IF NOT EXIST "%@@MVNW_JAVA_EXE%" (
  @SET "@@MVNW_JAVA_EXE=java"
)

@SET WRAPPER_JAR="%MAVEN_PROJECTBASEDIR%\.mvn\wrapper\maven-wrapper.jar"
@SET WRAPPER_LAUNCHER=org.apache.maven.wrapper.MavenWrapperMain
@SET DOWNLOAD_URL="https://repo.maven.apache.org/maven2/org/apache/maven/wrapper/maven-wrapper/3.2.0/maven-wrapper-3.2.0.jar"

@IF EXIST %WRAPPER_JAR% (
  @SET @@MVNW_CMD="%@@MVNW_JAVA_EXE%" -classpath %WRAPPER_JAR% %WRAPPER_LAUNCHER%
) ELSE (
  @ECHO Couldn't find %WRAPPER_JAR%, downloading...
  @IF NOT EXIST "%MAVEN_PROJECTBASEDIR%\.mvn\wrapper" (
    @MKDIR "%MAVEN_PROJECTBASEDIR%\.mvn\wrapper"
  )
  @%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe -Command "&{"^
    "$webclient = new-object System.Net.WebClient;"^
    "if (-not ([string]::IsNullOrEmpty('%MVNW_USERNAME%') -and [string]::IsNullOrEmpty('%MVNW_PASSWORD%'))) {"^
    "$webclient.Credentials = new-object System.Net.NetworkCredential('%MVNW_USERNAME%', '%MVNW_PASSWORD%');"^
    "}"^
    "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; $webclient.DownloadFile('%DOWNLOAD_URL%', %WRAPPER_JAR%)"^
    "}"
  @IF "%ERRORLEVEL%"=="0" (@SET @@MVNW_CMD="%@@MVNW_JAVA_EXE%" -classpath %WRAPPER_JAR% %WRAPPER_LAUNCHER%)
  @IF NOT "%ERRORLEVEL%"=="0" (@SET "@@MVNW_ERROR=ERROR: Failed to download %WRAPPER_JAR%")
)

@IF NOT "%@@MVNW_ERROR%"=="" (
  @ECHO %@@MVNW_ERROR%
  @EXIT /B 1
)

@%@@MVNW_CMD% %MAVEN_CONFIG% %*
