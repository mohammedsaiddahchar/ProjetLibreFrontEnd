<div layout:fragment="content">

  <form class="form-signin" th:action="@{/login}" th:object="${user}" method="post">
    <h2 class="form-signin-heading">LOGIN PANEL</h2>
    <div class="alert alert-danger" th:if="${param.error}">
      Incorrect credentials or account not activated.
    </div>
    <input type="text" id="inputUsername" name="username" class="form-control top" placeholder="username goes here..." required="required" autofocus="autofocus"/>
    <input type="password" id="inputPassword" name="password" class="form-control bottom" placeholder="password goes here..."
           required="required"/>
    <div class="checkbox">
      <label>
        <input type="checkbox" name="remember-me"/> Remember me
      </label>
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
  </form>
